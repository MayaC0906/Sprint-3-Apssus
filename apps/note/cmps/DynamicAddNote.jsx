import { noteService } from "../services/note.service.js"
import { NoteColorChoose } from "./NoteColorChoose.jsx"
const { useState } = React
export function DynamicAddNote({ onToggeleAddNote, onNewNote }) {

    const [newNote, setNewNote] = useState(noteService.getEmptyTxtNote())
    const [isNewColorsShown, setIsNewColorsShown] = useState(false)

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
        if (!newNote.info.txt && !newNote.info.title ) return
        noteService.save(newNote)
            .then(note => onNewNote())
        onToggeleAddNote()
    }

    function onSetNewNoteColor(color) {
        setNewNote(prevNote => ({ ...prevNote, style: { ...prevNote.style, backgroundColor: color } }))
    }

    function handleFileChange(ev) {
        setNewNote(prevNote => ({ ...prevNote, info: { ...prevNote.info, url: target.value } }))
    }


    const bgc = newNote.style.backgroundColor
    return (
        <React.Fragment>

            <div style={{ backgroundColor: bgc }} className="add-txt-note">
                <button className="fa pin small-btn" onClick={onPinNote}></button>
                <textarea className="add-title-input" onChange={onSetTitle} placeholder="Title"></textarea>
                <textarea className="add-txt-input" onChange={onSetTxt} placeholder="Write A Note..." ></textarea>
                <section className="bottom-line">
                        <section className="tool-bar">
                            <button className="fa file add-file-btn">
                                <input className="add-file" type="file" accept=".jpg, .png" onChange={handleFileChange} />
                            </button>
                            <button onClick={() => setIsNewColorsShown(!isNewColorsShown)} className="fa color"></button>
                        <button className="save-note-btn" onClick={onToggeleAddNote}>close</button>
                    </section>
                        <button className="save-note-btn" onClick={onSaveNote}>Save</button>
                </section>
            {isNewColorsShown && <NoteColorChoose onSetNewNoteColor={onSetNewNoteColor} isNewColorsShown={isNewColorsShown}/>}
            </div>
        </React.Fragment>
    )
}