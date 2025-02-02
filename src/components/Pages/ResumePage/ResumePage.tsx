import './ResumePage.css'
import NavBar from "../../NavBar/NavBar.tsx";
import resume from "../../../assets/resume.pdf"
import {Pages} from "../../../constants/pageNames.ts";

export default function ResumePage() {
    return (
        <div className="resume-base-page">
            <NavBar pageName={Pages.ResumePage}></NavBar>
            <DownloadButton></DownloadButton>
            <div className="clipboard">
                <div className="resume-text">
                    <h3 className="center">Kaitlyn Fernelius | Software Engineer</h3>
                    <Separator></Separator>
                    <h3 className="center">Professional Summary</h3>
                    <p>Software Development Engineer with Bachelor’s degree in computer science and 4+ years of proven
                        experience in
                        supporting cross-functional teams.</p>
                    <Separator></Separator>
                    <h3 className="center">Skills</h3>
                    <SkillsTable></SkillsTable>
                    <Separator></Separator>
                    <h3 className="center">Professional Experience</h3>
                    <p>Kohl's Technology | Remote</p>
                    <p>Software Engineer</p>
                    <p>* * *</p>
                    <p>Amazon | Remote</p>
                    <p>Software Engineer, Amazon Fulfillment Technologies</p>
                    <p>* * *</p>
                    <p>Accenture | Nashville, TN</p>
                    <p>Software Engineering Associate</p>
                    <p>* * *</p>
                    <p>Nelson Laboratories, LLC | West Jordan, UT</p>
                    <p>Document Control Supervisor</p>
                </div>
            </div>
        </div>
    )
}

function DownloadButton() {
    const downloadPdf = () => {
        const pdfUrl = resume;
        const  link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "katy-fernelius-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (<button onClick={downloadPdf} className="download-button">Download PDF</button>)
}

function SkillsTable() {
    return (
        <table>
            <tbody>
            <tr>
                <td>Angular</td>
                <td>AWS</td>
                <td>XP Pairing</td>
            </tr>
            <tr>
                <td>Java/SpringBoot</td>
                <td>GCP</td>
                <td>Agile</td>
            </tr>
            <tr>
                <td>HTML/CSS</td>
                <td>JavaScript</td>
                <td>OpenShift</td>
            </tr>
            <tr>
                <td>Gitlab</td>
                <td>Python</td>
                <td>Salesforce</td>
            </tr>
            </tbody>
        </table>
    )
}

function Separator() {
    return (
        <hr style={{backgroundColor: "black", height: "2px", width: "75%", border: "none"}}/>
    )
}