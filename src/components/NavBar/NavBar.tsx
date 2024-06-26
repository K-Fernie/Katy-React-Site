import './NavBar.css'
import options from '../../assets/options-header.png'
import {Link} from "react-router-dom";


export default function NavBar(props: { isHomePage: boolean }) {
    return (
        <>
            <div className="nav-body">
                <div className='options-board'>
                    <img className="options-header" src={options} alt="options"/>
                    <div className="buttons-container">
                        {!props.isHomePage && <Link to="/Katy-React-Site/" className="button-style">Home</Link>}
                        <Link to="/Katy-React-Site/portfolio" className="button-style">Portfolio</Link>
                        <Link to="/Katy-React-Site/about-me" className="button-style">About Me</Link>
                        <Link to="/Katy-React-Site/resume" className="button-style">Resume</Link>
                        <Link to="/Katy-React-Site/game" className="button-style">Games</Link>
                    </div>
                </div>
            </div>
        </>)
}