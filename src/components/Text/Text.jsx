import { useEffect, useState } from 'react';
import './Text.scss'

export const resetTileAndText = (v1,v2) => {
    document.getElementById("fileTitle").value = v1;
    document.getElementById("fileText").value = v2;
} 

function Text({activeFile, fileActions}){



   
    useEffect(() =>{
        fileActions.setActiveFile(activeFile);
    })

    const [fileTitle, setFileTitle] = useState(activeFile.title);
    const [fileText, setFileText] = useState(activeFile.text);
    

    const saveFile = () => {
        const newUpdate = {
            id: activeFile.id,
            title: fileTitle,
            text: fileText,
            author: activeFile.author
        }
        fileActions.updateFile(newUpdate, activeFile);
        activeFile=newUpdate;
    }

    return(
        
        <div className="text-wrapper">
            <input type="text" id="fileTitle" className="file-title-field"  onChange={(chg)=>setFileTitle(chg.target.value)}/>
            <textarea className="file-content-field" id="fileText" onChange={(chg)=>setFileText(chg.target.value)}/>
            <button onClick={() => saveFile()}>Save</button>
        </div>
    )
}

export default Text;