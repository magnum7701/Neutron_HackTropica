import "../styles/DrawingTools.scss"

export const DrawingTools = () =>{
    return(

        <div className="drawing-tools">
            <img src="./icons/favicon.svg" alt="" />
            <h5>Drawing Tools</h5>
            <div className="shapes">
                <div className="shape-box"></div>
                <div className="shape-box"></div>
                <div className="shape-box"></div>
                <div className="shape-box"></div>
                <div className="shape-box"></div>
                <div className="shape-box"></div>
            </div>
            <hr />
            <button className="save-btn">Save</button>
            <button className="cancel-btn">Cancel</button>
        </div>
        
    )
}