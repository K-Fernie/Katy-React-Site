import './App.css'
import NavBar from "./components/NavBar/NavBar.tsx";
import NameBadge from "./components/NameBadge/NameBadge.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AnimationFrame from "./components/AnimationFrame/AnimationFrame.tsx";

function App() {

  return (
    <>
        <div className="base-page">
            <NameBadge></NameBadge>
            <div className="body">
                <NavBar></NavBar>
                <AnimationFrame></AnimationFrame>
            </div>
            <Footer></Footer>
            {/* TODO add characters */}
            {/* TODO add interactive elements */}
            {/* TODO add new pages and navigation */}
        </div>
    </>
  )
}

export default App
