import "./App.css";
import Header from "./pages/header/header";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./pages/footer/footer";
import ImageDetail from "./pages/media/media-detail/image-detail";
import SignIn from "./pages/login/login";
import Register from "./pages/register/register";
import Images from "./pages/media/media-list/images";
import Media from "./pages/media/media";
import AudioDetail from "./pages/media/media-detail/audio-detail";

const App: React.FC = () => {
  const [headerParams, setHeaderParams] = useState({
    searchParam: "random",
    filter: {
      mediaType: "image",
    },
  });

  const checkHeaderValue = (e: any) => {
    if ("string" === typeof e)
      setHeaderParams({
        ...headerParams,
        searchParam: e,
      });
    else {
      setHeaderParams({
        ...headerParams,
        filter: e,
      });
    }
  };
  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        width={"100%"}
      >
        <Header onSearchChange={checkHeaderValue} />
        <div className="flex flex-row bg-white min-h-[1000px]">
          <Routes>
            <Route path="/" element={<Media headerParams={headerParams} />} />
            <Route path="/images/:id" element={<ImageDetail />} />
            <Route path="/audios/:id" element={<AudioDetail />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/logup" element={<Register />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
