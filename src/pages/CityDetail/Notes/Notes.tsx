import React, {FC, useState} from 'react';
import { useLocalStorage } from '../../../helpers/useLocalStorage';
import {useParams} from "react-router-dom";
import {StyledSaveButton, StyledTextArea } from './Notes.s';
import {Button} from "../../../components/Button/Button";


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
        <h4>Notes</h4>
        <StyledTextArea value={note} onChange={(e) => setNote(e.target.value)} />
        <div>
            <StyledSaveButton onClick={saveNote}>Save</StyledSaveButton>
            <Button onClick={clearValue}>Clear</Button>
        </div>
    </div>
};
