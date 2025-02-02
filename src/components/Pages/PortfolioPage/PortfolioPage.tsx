import './PortfolioPage.css'
import {useEffect, useState} from "react";

export default function PortfolioPage() {
    const [displayText, setDisplayText] = useState("");
    const text = "Page In Progress...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                console.log(text[index])
                setDisplayText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hacker-screen">
            <div>
                <span className="typed-text">{displayText}</span>
                <span className="cursor">_</span>
            </div>
        </div>
    );
}