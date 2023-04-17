import "./Sidebar.scss"


import { AiFillFileAdd } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillPrinter } from 'react-icons/ai';

import { BiFileFind } from 'react-icons/bi';
import { BsMarkdownFill } from 'react-icons/bs';




function Sidebar({files, fileActions}){
    
    return(
        <div className="sidebar-wrapper">

            <div className="sidebar-top">
                <button className="create-file" onClick={() => {fileActions.toggleCreateModal.showModal(fileActions.modalState)}}><AiFillFileAdd/></button>
                <button className="delete-file"><AiFillDelete/></button>
                <button className="edit-file"><AiFillEdit/></button>
                <h1 className="rainbow_text">Jarv Note UwU</h1>
            </div>

            <div className="find-wrapper">
                <input type="text" placeholder="Search document..."/>
                <button><BiFileFind/></button>
            </div>

            <div className="sidebar-files">
                {
                    files.map((file) => {
                        return(
                        <div className="sidebar-document">
                            <div className="sidebar-document-header"><h4>{file.title}</h4><h5>by {file.author}</h5></div>
                            <small>{`${file.text.substr(1, 50)} ...`}</small>
                        </div>
                        )
                    })
                }
            </div>


            <div className="sidebar-bottom">
                <button id="markdownButton"><BsMarkdownFill/></button>
                <button id="markdownButton"><AiFillPrinter/></button>
            </div>

        </div>
    )

}

export default Sidebar;