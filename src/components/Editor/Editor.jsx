import React, { useEffect } from "react"
import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar"

import {createFile, updateFile} from "./fileManager.js"
import NewNote from "../Modals/QuickNote/NewNote";
import Text from "../Text/Text";

import "./Editor.scss"


function Editor(){
   

    const [files, setFiles] = useState(Array());
    const [activeFile, setActiveFile] = useState({});
    

    const [showCreate, setShowCreate] = useState(true);
    


    const toggleCreateModal = {
        showModal: (showCreate) => setShowCreate(true),
        hideModal: (showCreate) => setShowCreate(false),
    }

    const activateFile = (file) =>{
        setActiveFile(file);
    }

    const addFile = (file) => {
        setFiles([file, ...files])
    }

    useEffect(()=>{
        setFiles(files);
    })


    const createModalProps = {
        toggleCreateModal: toggleCreateModal,
        modalState: showCreate,
    }
    //un obiect pe care il transmitem ca parametru cu toate functile care vrem sa le foosim sa nu facem prea multe prop-uri
    const fileActions = {
        createFile: createFile,
        addFile: addFile,
        toggleCreateModal: toggleCreateModal,
        modalState: showCreate,
        setActiveFile: setActiveFile,
        updateFile: updateFile,
    }

    return(
        <>
            <div className="editor-layout">
            <NewNote modalProps={createModalProps} fileActions={fileActions}></NewNote>
            <Sidebar files={files} fileActions ={fileActions}></Sidebar>
            <Text activeFile={activeFile} fileActions={fileActions}></Text>
            </div>

        </>
    )
}

export default Editor