import { noteService } from "../services/note.service.js"
const { useState } = React
export function DynamicAddNote({onToggeleAddNote, onNewNote}) {

    const [newNote, setNewNote] = useState(noteService.getEmptyTxtNote())
    const [isColorsShown, setIsColorsShown] = useState(false)
    console.log(isColorsShown);

function onSetTitle({target}) {
    setNewNote(prevNote=>({...prevNote, info: {...prevNote.info, title:target.value} }))
}

function onSetTxt({target}) {
    setNewNote(prevNote=>({...prevNote, info: {...prevNote.info, txt:target.value} }))
}

function onPinNote() {
    setNewNote(prevNote=>({...prevNote, isPinned: !prevNote.isPinned}))
}

function onSaveNote() {
    noteService.save(newNote)
    .then (note=> onNewNote())
    onToggeleAddNote()
}

function onSetNoteColor (color) {
    setNewNote(prevNote=>({...prevNote, style: {...prevNote.style, backgroundColor:color} }))
}

const bgc = newNote.style.backgroundColor
    return (
        <React.Fragment>

        <div style={{ backgroundColor: bgc }} className="add-txt-note">
            <section className="add-txt-header">
            <button className="fa pin pin-button" onClick={onPinNote}></button>
            <input onChange={onSetTitle} type="text" placeholder="Title" />
            </section>
            <input onChange={onSetTxt} type="text" placeholder="Write A Note..." />
            <section>
            <button onClick={onSaveNote}>Save</button>
            <button  onClick={()=> setIsColorsShown(!isColorsShown)} className="fa color"></button>
            </section>
        </div>
            <div className={isColorsShown?'':'hidden'}>
                <button onClick={()=>onSetNoteColor('#fff8b8')} className="color-btn yellow-button"></button>
                <button onClick={()=>onSetNoteColor('#faafa8')} className="color-btn pink-button"></button>
                <button onClick={()=>onSetNoteColor('#e2f6d3')} className="color-btn green-button"></button>
                <button onClick={()=>onSetNoteColor('#d4e4ed')} className="color-btn blue-button"></button>
                <button onClick={()=>onSetNoteColor('#d3bfdb')} className="color-btn purple-button"></button>
                <button onClick={()=>onSetNoteColor('#efeff1')} className="color-btn gray-button"></button>
            </div>
        </React.Fragment>
    )
}