import { Notes } from "../cmps/Notes.jsx"
import { SideNav } from "../cmps/SideNav.jsx"


export function NoteIndex() {
    return (
        <section className="main-layout">
            <section className="main-screen">
                <Notes />
            </section>
            <section className="side-nav">
                <SideNav />
            </section>
        </section>
    )
}
