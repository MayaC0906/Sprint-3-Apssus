import { NoteList } from "../cmps/NoteList.jsx"
import { SideNav } from "../cmps/SideNav.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React


export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [pinned, setpinned] = useState(null)
    const [unpinned, setunpinned] = useState(null)
    useEffect(() => {
        noteService.query()
            .then(setNotes)
    }, [])

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

    if (!notes) return <div>Loading...</div>
    return (
        <section className="main-layout">
            <section className="main-screen">
                {pinned &&
                    <section className="pinned-notes">
                        <h1>Pinned Notes:</h1>
                        <NoteList onPinChange={onPinChange} notes={pinned} />
                    </section>
                }
                {unpinned &&
                    <section className="unpinned-notes">
                        <h1>Other Notes:</h1>
                        <NoteList onPinChange={onPinChange} notes={unpinned} />
                    </section>
                }
            </section>
            <section className="side-nav">
                <SideNav />
            </section>
        </section>
    )
}
