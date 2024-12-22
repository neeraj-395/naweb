import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ArchivePage from "./pages/archive/ArchivePage";

function App() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/archive" element={<ArchivePage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </Box>
    </Container>
  );
}

export default App
