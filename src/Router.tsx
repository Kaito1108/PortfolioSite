import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    );
}