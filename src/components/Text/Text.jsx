import { useState } from 'react';
import './Text.scss'

function Text({activeFile, fileActions}){



    return(
        <div className="text-wrapper">
            <input type="text" className="file-title-field" placeholder={activeFile.title} onChange={(chg) => {fileActions.updateFile}}/>
            <textarea className="file-content-field" value={activeFile.text}/>
        </div>
    )
}

export default Text;