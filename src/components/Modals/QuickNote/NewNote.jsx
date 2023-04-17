import { useState } from 'react';
import './NewNote.scss'


//TODO: refactor to avoid reps. in prop objs
//Also, maybe add a retract state in which the values are saved in local storage -- should rework toggleCreateModal for that

function NewNote({modalProps, fileActions}){

    const createAndAdd = () => {
        const doc = fileActions.createFile(fileTitle, "", fileAuthor);
        fileActions.addFile(doc);
    }

    const [fileTitle, setFileTitle] = useState("");
    const [fileAuthor, setFileAuthor] = useState("");

    if(modalProps.modalState ==true){
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-controls">
                        <h2>New file</h2>
                        <span className="close" onClick={() => {
                        setFileTitle(""); 
                        setFileAuthor("");
                        modalProps.toggleCreateModal(modalProps.modalState)
                        }}>x</span>
                    </div>

                    
                    <h2>File Name:</h2>
                    <input type="text" id="fileName" onChange={(chg) => {setFileTitle(chg.target.value)}}/>

                    <h2>Author Name:</h2>
                    <input type="text" id="authorName" onChange={(chg) => {setFileAuthor(chg.target.value)}}/>

                    <button id="createFile"
                    onClick={() => {createAndAdd(); modalProps.toggleCreateModal(modalProps.modalState)}}    
                    >Create</button>
                </div>
            </div>            
        )
    }else return(<></>);
} 


export default NewNote