import { NoteList } from "../cmps/NoteList.jsx"
import { NoteSideNav } from "../cmps/NoteSideNav.jsx"
import { DynamicAddNote } from "../cmps/DynamicAddNote.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React


export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [pinned, setpinned] = useState(null)
    const [unpinned, setunpinned] = useState(null)
    const [toggleAddNote, setToggleAddNote] = useState(false)
    const [isTrash, setIsTrash] = useState(false)
    console.log('pinned:', pinned);
    console.log('unpinned:', unpinned);

    useEffect(() => {
        noteService.query(isTrash)
            .then(setNotes)
    }, [isTrash])

    useEffect(() => {
        if (!notes) return
        const pinnedNotes = notes.filter(note => (note.isPinned))
        setpinned(pinnedNotes)
    }, [notes])

    useEffect(() => {
        if (!notes) return
        const unPinnedNotes = notes.filter(note => (!note.isPinned))
        setunpinned(unPinnedNotes)
    }, [notes])

    function onPinChange(note) {
        note.isPinned = !note.isPinned
        noteService.save(note)
            .then(note => noteService.query()
                .then(setNotes))
    }

    function onToggeleAddNote() {
        setToggleAddNote(!toggleAddNote)
    }

    function onNewNote() {
        noteService.query(false)
            .then(setNotes)
    }

    function onDeleteNote(note) {
        note.isDeleted = !note.isDeleted
        noteService.save(note)
            .then(note => noteService.query(isTrash)
                .then(setNotes))
    }

    function onSetIsTrash(newIsTrash) {
        setIsTrash(newIsTrash)
    }

    if (!notes) return <div>Loading...</div>
    return (
        <section className="main-layout">
            <section className="main-screen">
                {(!toggleAddNote) && <input className="add-note-input" onClick={onToggeleAddNote} type="text" placeholder="Write a note..." />}
                {toggleAddNote && <DynamicAddNote onToggeleAddNote={onToggeleAddNote} onNewNote={onNewNote} />}

                {pinned && pinned.length > 0 &&
                    <section className="pinned-notes">
                        <h1>Pinned Notes:</h1>
                        <NoteList onPinChange={onPinChange} onDeleteNote={onDeleteNote} notes={pinned} />
                    </section>
                }
                {unpinned && unpinned.length > 0 &&
                    <section className="unpinned-notes">
                        <h1>Other Notes:</h1>
                        <NoteList onPinChange={onPinChange} onDeleteNote={onDeleteNote} notes={unpinned} />
                    </section>
                }
            </section>
            <section className="side-nav">
                <NoteSideNav onSetIsTrash={onSetIsTrash} isTrash={isTrash} />
            </section>
        </section>
    )
}
