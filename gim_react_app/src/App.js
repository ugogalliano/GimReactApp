import { Route, Routes } from "react-router-dom";

//@mui
import { Box } from "@mui/material";

//pages
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400px" sx={{width:{xl: '1448px'}}} m="auto" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}

export default App;
