import React from "react"
import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar"

import {createFile} from "./fileManager.js"


function Editor(){
   

    const [files, setfiles] = useState(Array());

    const addFile = (file) => {
        setfiles([...files, file])
    }

    //un obiect pe care il transmitem ca parametru cu toate functile care vrem sa le foosim sa nu facem prea multe prop-uri
    const fileActions = {
        createFile: createFile,
        addFile: addFile,
    }
    
    




    return(
        <>
            <Sidebar files={files} fileActions ={fileActions}></Sidebar>
        </>
    )
}

export default Editor