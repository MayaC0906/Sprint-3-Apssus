import { NoteList } from "../cmps/NoteList.jsx"
import { SideNav } from "../cmps/SideNav.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React


export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    useEffect(() => {
        noteService.query()
            .then(setNotes)
    }, [])
    

    if (!notes) return <div>Loading...</div>
    return (
        <section className="main-layout">
            <section className="main-screen">
                <NoteList notes={notes}/>
            </section>
            <section className="side-nav">
                <SideNav />
            </section>
        </section>
    )
}
