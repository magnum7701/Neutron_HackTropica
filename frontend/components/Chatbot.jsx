import { BsSend } from "react-icons/bs";
import "../styles/Chatbot.scss"

export const Chatbot = () =>{
    return(
        <div className="chatbot-section">
            <img src="./icons/bot.svg" alt="" />
            <p>Ask questions, prepare questions and assignments and much more</p>
            <div className="send">
                <input type="text" placeholder="Ask Anything..." />
                <button>
                    <BsSend className/>
                </button>
            </div>
        </div>
    )
}