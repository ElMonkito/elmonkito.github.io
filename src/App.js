import React from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import About from "./components/about"
import Parcours from "./components/test"
import Box from "@mui/material/Box";

export default function App() {
    return (
        <Box sx={{ minHeight: "100vh", overflowY: "auto" }}>
            <Navbar />

            <Box id="accueil">
                <LandingPage />
            </Box>

            <Box id="apropos">
                <About />
            </Box>

            <Box id="parcours">
                <Parcours />
            </Box>

            {/*<Box id="projets">*/}
            {/*    <Projects />*/}
            {/*</Box>*/}

            {/*<Box id="contact">*/}
            {/*    <Contact />*/}
            {/*</Box>*/}
        </Box>
    );
}
