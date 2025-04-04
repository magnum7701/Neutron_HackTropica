import { Chatbot } from "./Chatbot"
import { DrawingTools } from "./DrawingTools"
import "../styles/NewNote.scss";

export const NewNote = () =>{
    return(
        <> 
            <div>
                <div className="tools-text"> 
                    <DrawingTools/>
                    <div className="content">
                        <h3>Enter youtube url</h3>
                        <div className="driver">
                            <input type="text" placeholder="https://www.youtube.com/watch?v=" className="yt-url url-box" />
                            <input type="text" placeholder="Enter keyword" className={`keyword-url url-box`}/>
                            <button className="transcribe">Transcribe</button>
                            <button className="up-pdf">+ Upload PDF</button>
                        </div>
                    </div>
                <Chatbot/>  
                </div>
            </div>
        </>
    )
}