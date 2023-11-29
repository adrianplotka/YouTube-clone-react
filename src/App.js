import React from "react";
import Nav from "./common/Nav";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./common/Home";
import VideoDetail from "./common/VideoDetail";
import SearchFeed from "./common/SearchFeed";
import ChannelDetail from "./common/ChannelDetail";


const App = () => (
  <HashRouter>
    <Nav />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </HashRouter>

)
export default App;