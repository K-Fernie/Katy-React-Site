import './Footer.css'
import linkedIn from '../../../assets/linked-in.png'
import github from '../../../assets/github.png'
import x from '../../../assets/x-icon.png'

interface Icon {
    ref: string;
    src: string;
    alt: string;
}

export default function Footer() {
    const iconData: Icon[] = [
        {
            ref: "https://www.linkedin.com/in/kaitlyn-fernelius/",
            src: linkedIn,
            alt: "linkedin-icon"
        }, {
            ref: "https://github.com/K-Fernie",
            src: github,
            alt: "github-icon"
        }, {
            ref: "",
            src: x,
            alt: "x-icon"
        }
    ]
    return (
        <div className="footer-elements">
            {
                iconData.map((icon) => {
                    return (
                        <a href={icon.ref} target="_blank" rel="noopener noreferrer">
                            <img className="icon" src={icon.src} alt={icon.alt}/>
                        </a>
                    );
                })
            }
        </div>
    )
}