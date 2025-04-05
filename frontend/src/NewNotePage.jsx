import { useParams } from "react-router";
import { Chatbot } from "../components/Chatbot";
import { DrawingTools } from "../components/DrawingTools";
import "../styles/NewNote.scss";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import { useState } from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import "../styles/NewNotePage.scss"

export const NewNotePage = () => {
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });

    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");


    return (
        <>
            <div>
                <div className="tools-text">
                    <DrawingTools />
                    <div className="content">
                        <h3>Enter youtube url</h3>
                        <div className="driver">
                            <input type="text" placeholder="https://www.youtube.com/watch?v=" className="yt-url url-box" />
                            <input type="text" placeholder="Enter keyword" className={`keyword-url url-box`} />
                            <button className="transcribe">Transcribe</button>
                            <button className="up-pdf">+ Upload PDF</button>
                        </div>
                        <input type="text" placeholder="Enter Title" className="title-box" />
                        <ReactMde 
                            value={value}
                            onChange={setValue}
                            selectedTab={selectedTab}
                            onTabChange={setSelectedTab}
                            generateMarkdownPreview={markdown =>
                                Promise.resolve(converter.makeHtml(markdown))
                            }
                        />

                        
                    </div>
                    <Chatbot />
                </div>
            </div>
        </>
    );
};
