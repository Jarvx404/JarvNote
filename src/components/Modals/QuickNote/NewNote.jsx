import { useState } from 'react';
import {resetTileAndText} from "../../Text/Text";
import './NewNote.scss'


//TODO: refactor to avoid reps. in prop objs
//Also, maybe add a retract state in which the values are saved in local storage -- should rework toggleCreateModal for that

function NewNote({modalProps, fileActions}){

    const createAndAdd = () => {
        const doc = fileActions.createFile(fileTitle, "", fileAuthor);
        resetTileAndText(fileTitle, "");
        fileActions.addFile(doc);
        fileActions.setActiveFile(doc);
    }


    const createNewFile = () => {
        createAndAdd(); 
        setFileTitle("");
        setFileAuthor("");
        localStorage.setItem("fileTitle", fileTitle);
        localStorage.setItem("fileAuthor", fileAuthor);
        modalProps.toggleCreateModal.hideModal(modalProps.modalState)
    }
    
    const [fileTitle, setFileTitle] = useState(localStorage.getItem("Title"));
    const [fileAuthor, setFileAuthor] = useState(localStorage.getItem("Author"));




    if(modalProps.modalState == true){
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-controls">
                        <h2>New file</h2>
                        <div>
                            
                        <span className="close" onClick={() => {
                        localStorage.setItem("fileTitle", fileTitle);
                        localStorage.setItem("fileAuthor", fileAuthor);
                        modalProps.toggleCreateModal.hideModal(modalProps.modalState)
                        }}>x</span>


                        </div>
                    </div>

                    
                    <h2>File Name:</h2>
                    <input type="text" id="fileName" onChange={(chg) => {setFileTitle(chg.target.value)}} placeholder={fileTitle}/>

                    <h2>Author Name:</h2>
                    <input type="text" id="authorName" onChange={(chg) => {setFileAuthor(chg.target.value)}} placeholder={fileAuthor}/>

                    <button id="createFile"
                    onClick={createNewFile}   
                    >Create</button>
                </div>
            </div>            
        )
    }else return(<></>);
} 


export default NewNote