import { DynamicNote } from "./DynamicNote.jsx"
import { NoteColorChoose } from "./NoteColorChoose.jsx"
const { useState, useEffect } = React



const { Fragment } = React
export function NoteList({ onPinChange, notes, onDeleteNote, onSetNoteColor, onDuplicateNote }) {
    const [colorShown, setColorShown] = useState(null)
    const [bgcColors, setBgcColors] = useState(notes.map(note => note.style.backgroundColor))

    useEffect(() => {
        setBgcColors(notes.map(note => note.style.backgroundColor))
    }, [notes])

    function onSetColorShown(idx) {
        if (colorShown === idx) setColorShown(null)
        else (setColorShown(idx))
    }

    function onSetNewBgc(idx, color) {
        let newBgcColors = [...bgcColors]
        newBgcColors[idx] = color
        setBgcColors(newBgcColors)
    }

    return (
        <Fragment>
            <section className="notes">
                {notes.map((note, idx) => {
                    return (
                        <Fragment>
                            <article key={note.id} className="note" style={{ backgroundColor: bgcColors[idx]}}>
                                <button onClick={() => onPinChange(note)} className="fa pin small-btn "></button>
                                <div className="dynamic-note">
                                    <DynamicNote note={note} style={note.style} id={note.id} info={note.info} type={note.type} />
                                </div>
                                <section className="note-tool">
                                    <button onClick={() => onDeleteNote(note)} className="fa trash small-btn"></button>
                                    <button onClick={() => onSetColorShown(idx)} className="fa color small-btn"></button>
                                    <button onClick={() => onDuplicateNote(note)} className="far copy small-btn"></button>
                                </section>
                                {colorShown === idx && <NoteColorChoose onSetNoteColor={onSetNoteColor} note={note} onSetNewBgc={onSetNewBgc} idx={idx} />}
                            </article>
                        </Fragment>
                    );
                })}
            </section>
        </Fragment>
    )
}

