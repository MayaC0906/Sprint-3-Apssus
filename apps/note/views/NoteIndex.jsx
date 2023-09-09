import { NoteList } from "../cmps/NoteList.jsx"
import { NoteSideNav } from "../cmps/NoteSideNav.jsx"
import { NoteHeader } from "../cmps/NoteHeader.jsx"
import { DynamicAddNote } from "../cmps/DynamicAddNote.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React


export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [pinned, setpinned] = useState(null)
    const [unpinned, setunpinned] = useState(null)
    const [toggleAddNote, setToggleAddNote] = useState(false)
    const [isTrash, setIsTrash] = useState(false)
    const [filterBy, setFilterBy] = useState(({isTrash, serchKey:''}))

    useEffect(() => {
        noteService.query(filterBy)
            .then(newNotes=>setNotes(newNotes))
    }, [filterBy])

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
            .then(note => noteService.query(filterBy)
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
        noteService.remove(note)
            .then(note => noteService.query(filterBy))
            .then(setNotes)
    }

    function onDuplicateNote(note) {
        const newNote = { ...note, id: false }
        console.log(newNote);
        noteService.save(newNote)
            .then(note => noteService.query(filterBy))
            .then(setNotes)
    }

    function onSetIsTrash(newIsTrash) {
        setIsTrash(newIsTrash)
        setFilterBy(prevFilter=> ({...prevFilter, isTrash:newIsTrash}))
    }

    function onChangeSearch(newSearchKey) {
        setFilterBy(prevFilter=> ({...prevFilter, searchKey:newSearchKey}))
    }

    function onSetNoteColor(note, color) {
        note.style.backgroundColor = color
        noteService.save(note)
    }

    if (!notes) return <div>Loading...</div>
    return (
        <section className="main-layout">
            <section className="main-screen">
                    <NoteHeader onChangeSearch={onChangeSearch}  />
                <section className="notes-layout">
                    {(!toggleAddNote) && <input className="add-note-input" onClick={onToggeleAddNote} type="text" placeholder="Write a note..." />}
                    {toggleAddNote && <DynamicAddNote onToggeleAddNote={onToggeleAddNote} onNewNote={onNewNote} />}

                    {pinned && pinned.length > 0 &&
                        <section className="pinned-notes">
                            <h1 className="notes-title">Pinned Notes:</h1>
                            <NoteList onPinChange={onPinChange} onDeleteNote={onDeleteNote} notes={pinned} onSetNoteColor={onSetNoteColor} onDuplicateNote={onDuplicateNote} />
                        </section>
                    }
                    {unpinned && unpinned.length > 0 &&
                        <section className="unpinned-notes">
                            <h1 className="notes-title">Other Notes:</h1>
                            <NoteList onPinChange={onPinChange} onDeleteNote={onDeleteNote} notes={unpinned} onSetNoteColor={onSetNoteColor} onDuplicateNote={onDuplicateNote} />
                        </section>
                    }
                </section>
            </section>
            <section className="side-nav">
                <NoteSideNav onSetIsTrash={onSetIsTrash} isTrash={isTrash} />
            </section>
        </section>
    )
}
