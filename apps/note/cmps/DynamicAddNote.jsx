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

    function handleFileChange(ev) {
        setNewNote(prevNote => ({ ...prevNote, info: { ...prevNote.info, url: target.value } }))
    }


    const bgc = newNote.style.backgroundColor
    return (
        <React.Fragment>

            <div style={{ backgroundColor: bgc }} className="add-txt-note">
                <button className="fa pin pin-button" onClick={onPinNote}></button>
                <textarea className="add-title-input" onChange={onSetTitle} placeholder="Title"></textarea>
                <textarea className="add-txt-input" onChange={onSetTxt} placeholder="Write A Note..." ></textarea>
                <section className="bottom-line">
                        <section className="tool-bar">
                            <button className="fa file add-file-btn">
                                <input className="add-file" type="file" accept=".jpg, .png" onChange={handleFileChange} />
                            </button>
                            <button onClick={() => setIsColorsShown(!isColorsShown)} className="fa color"></button>
                    </section>
                        <button className="save-note-btn" onClick={onSaveNote}>Save</button>
                </section>
            </div>
            <ColorChoose onSetNoteColor={onSetNoteColor} isColorsShown={isColorsShown} />
        </React.Fragment>
    )
}