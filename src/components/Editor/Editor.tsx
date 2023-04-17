import React from "react"
import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar"

import {createFile} from "./fileManager.js"
import NewNote from "../Modals/QuickNote/NewNote";


function Editor(){
   

    const [files, setFiles] = useState(Array());
    const [showCreate, setShowCreate] = useState(true);

    const toggleCreateModal = {
        showModal: (showCreate) => setShowCreate(true),
        hideModal: (showCreate) => setShowCreate(false),
    }
    

    const addFile = (file) => {
        setFiles([file, ...files])
    }

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
    }
    
    




    return(
        <>
            <NewNote modalProps={createModalProps} fileActions={fileActions}></NewNote>
            <Sidebar files={files} fileActions ={fileActions}></Sidebar>
        </>
    )
}

export default Editor