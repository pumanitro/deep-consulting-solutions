import React, {FC, useState} from 'react';
import { useLocalStorage } from '../../../helpers/useLocalStorage';
import {useParams} from "react-router-dom";


export const Notes: FC<any> = () => {
    let { cityName } = useParams<any>();
    // 2 states because sometimes user can not to save already written text to storage/db:
    const [noteInStorage, setNoteInStorage] = useLocalStorage(cityName, '');
    const [note, setNote] = useState(noteInStorage);

    const saveNote = () => {
        setNoteInStorage(note);
    }

    const clearValue = () => {
        setNote('');
        setNoteInStorage('');
    }

    return <div>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />
        <div>
            <button onClick={saveNote}>Save</button>
            <button onClick={clearValue}>Clear</button>
        </div>
    </div>
};
