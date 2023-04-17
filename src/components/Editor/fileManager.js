import { v4 as uuidv4 } from 'uuid';

export const createFile = (title, text, author) => {
    const newFile = {
        id: uuidv4(),
        title: title,
        text: text,
        author: author,
    }
    return newFile;
}

export const updateFile = (id, title, text, author) => {
    const datedFile = {
        id: id,
        title:title,
        text:text,
        author: author,
    }
    return updateFile
}

