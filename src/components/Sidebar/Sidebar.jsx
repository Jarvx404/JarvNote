import { useEffect, useState } from "react";
import "./Sidebar.scss"
import {resetTileAndText} from "../Text/Text";

import { AiFillFileAdd } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillPrinter } from 'react-icons/ai';

import { BiFileFind } from 'react-icons/bi';
import { BsMarkdownFill } from 'react-icons/bs';




function Sidebar({files, fileActions, activeFile}){

    
    return(
        <div className="sidebar-wrapper">

            <div className="sidebar-top">
                <button className="create-file" onClick={() => {
                fileActions.toggleCreateModal.showModal(fileActions.modalState)
                }}><AiFillFileAdd/></button>
                
                <button className="delete-file" onClick={() => {fileActions.deleteFile(activeFile)}}><AiFillDelete/></button>
                <h1 className="rainbow_text">Jarv Note UwU</h1>
            </div>

            <div className="sidebar-files">
                {
                    files.map((file) => {
                        return(
                        <div key={file.id} className={`sidebar-document ${file.id === activeFile.id ? `selected` : ``}`} onClick={()=>{ resetTileAndText(activeFile.title,activeFile.text);fileActions.setActiveFile(file);}}>
                            <div className="sidebar-document-header"><h4>{file.title}</h4><h5>by {file.author}</h5></div>
                            <small>{`${file.text.substr(0, 50)} ...`}</small>
                        </div>
                        )
                    })
                }
            </div>


            <div className="sidebar-bottom">
                <button id="markdownButton" onClick={fileActions.setFiles(files)}><BsMarkdownFill/></button>
                <button id="markdownButton"><AiFillPrinter/></button>
            </div>

        </div>
    )

}

export default Sidebar;