import './NavBar.css'
import options from '../../assets/options-header.png'
export default function NavBar() {
    const doSomething = () => {
        console.log('Something');
    }
    return(
        <>
            <div className="nav-body">
                <div className='options-board'>
                    <img className="options-header" src={options} alt="options"/>
                    <div className="buttons-container">
                        <button className="button-style" onClick={doSomething}>Portfolio</button>
                        <button className="button-style" onClick={doSomething}>About Me</button>
                        <button className="button-style" onClick={doSomething}>Resume</button>
                        <button className="button-style" onClick={doSomething}>Games</button>
                    </div>
                </div>
            </div>
        </>)
}
