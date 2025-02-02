import './NavBar.css'
import options from '../../assets/options-header.png'
import {Link} from "react-router-dom";
import {Pages} from "../../constants/pageNames.ts";


export default function NavBar(props: { pageName: Pages }) {
    return (
        <>
            <div className="nav-body">
                <div className='options-board'>
                    <img className="options-header" src={options} alt="options"/>
                    <div className="buttons-container">
                        {props.pageName != Pages.HomePage && <Link to="/Katy-React-Site/" className="button-style">Home</Link>}
                        {props.pageName != Pages.PortfolioPage && <Link to="/Katy-React-Site/portfolio" className="button-style">Portfolio</Link>}
                        {props.pageName != Pages.AboutMePage && <Link to="/Katy-React-Site/about-me" className="button-style">About Me</Link>}
                        {props.pageName != Pages.ResumePage && <Link to="/Katy-React-Site/resume" className="button-style">Resume</Link>}
                        {props.pageName != Pages.GamesPage && <Link to="/Katy-React-Site/games" className="button-style">Games</Link>}
                    </div>
                </div>
            </div>
        </>)
}