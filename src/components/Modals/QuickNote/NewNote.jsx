import { useState } from 'react';
import './NewNote.scss'


//TODO: refactor to avoid reps. in prop objs
//Also, maybe add a retract state in which the values are saved in local storage -- should rework toggleCreateModal for that

function NewNote({modalProps, fileActions}){

    const createAndAdd = () => {
        const doc = fileActions.createFile(fileTitle, "", fileAuthor);
        fileActions.addFile(doc);
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
                        console.log(fileTitle);
                        modalProps.toggleCreateModal.hideModal(modalProps.modalState)
                        }}>x</span>


                        </div>
                    </div>

                    
                    <h2>File Name:</h2>
                    <input type="text" id="fileName" onChange={(chg) => {setFileTitle(chg.target.value)}} placeholder={fileTitle}/>

                    <h2>Author Name:</h2>
                    <input type="text" id="authorName" onChange={(chg) => {setFileAuthor(chg.target.value)}} placeholder={fileAuthor}/>

                    <button id="createFile"
                    onClick={() => {createAndAdd(); 
                    setFileTitle("");
                    setFileAuthor("");
                    modalProps.toggleCreateModal.hideModal(modalProps.modalState)}}    
                    >Create</button>
                </div>
            </div>            
        )
    }else return(<></>);
} 


export default NewNote