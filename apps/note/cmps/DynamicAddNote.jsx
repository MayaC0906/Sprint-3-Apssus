import { noteService } from "../services/note.service.js"
import { ColorChoose } from "./ColorChoose.jsx"
const { useState } = React
export function DynamicAddNote({ onToggeleAddNote, onNewNote }) {

    const [newNote, setNewNote] = useState(noteService.getEmptyTxtNote())
    const [isColorsShown, setIsColorsShown] = useState(false)

    function onSetTitle({ target }) {
        setNewNote(prevNote => ({ ...prevNote, info: { ...prevNote.info, title: target.value } }))
    }

    function onSetTxt({ target }) {
        setNewNote(prevNote => ({ ...prevNote, info: { ...prevNote.info, txt: target.value } }))
    }

    function onPinNote() {
        setNewNote(prevNote => ({ ...prevNote, isPinned: !prevNote.isPinned }))
    }

    function onSaveNote() {
        noteService.save(newNote)
            .then(note => onNewNote())
        onToggeleAddNote()
    }

    function onSetNoteColor(color) {
        setNewNote(prevNote => ({ ...prevNote, style: { ...prevNote.style, backgroundColor: color } }))
    }

    function handleFileChange (ev) {
        setNewNote(prevNote => ({ ...prevNote, info: { ...prevNote.info, url: target.value } }))
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
                    <button className="fa file add-file-btn">
                        <input className = "add-file" type="file" accept=".jpg, .png" onChange={handleFileChange}/>
                    </button>
                    <button onClick={() => setIsColorsShown(!isColorsShown)} className="fa color"></button>
                </section>
            </div>
            <ColorChoose onSetNoteColor={onSetNoteColor} isColorsShown={isColorsShown} />
        </React.Fragment>
    )
}