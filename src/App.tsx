import './App.css'
import HomePage from "./components/HomePage/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import PortfolioPage from "./components/Pages/PortfolioPage/PortfolioPage.tsx";
import ResumePage from "./components/Pages/ResumePage/ResumePage.tsx";
import GamesPage from "./components/Pages/GamesPage/GamesPage.tsx";
import AboutMePage from "./components/Pages/AboutMePage/AboutMePage.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/Katy-React-Site/" element={<HomePage/>}/>
                <Route path="/Katy-React-Site/portfolio" element={<PortfolioPage/>}/>
                <Route path="/Katy-React-Site/about-me" element={<AboutMePage/>}/>
                <Route path="/Katy-React-Site/games" element={<GamesPage/>}/>
                <Route path="/Katy-React-Site/resume" element={<ResumePage/>}/>
            </Routes>

        </>
    )
}

export default App
