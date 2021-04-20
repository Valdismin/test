import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@material-ui/core';



export const EditableSpan = React.memo(function () {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState("Add some tags");

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(title);
    }
    const activateViewMode = () => {
        setEditMode(false);
        setTitle(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ?    <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <span onDoubleClick={activateEditMode}>{title}</span>
});
