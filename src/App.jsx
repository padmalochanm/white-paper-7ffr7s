import React, { useRef } from "react";
import Home from './components/home'
import Blog from './components/blog'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
