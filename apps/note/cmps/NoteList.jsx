import { DynamicNote } from "./DynamicNote.jsx"


const { Fragment } = React
export function NoteList({onPinChange ,notes, onDeleteNote }) {

    return (
        <Fragment>
        <section className="notes">
          {notes.map(note => {
            const bgc = note.style ? note.style.backgroundColor  : "#FFFFFF"
  
            return (
              <article key={note.id} className="note" style={{ backgroundColor: bgc }}>
                <button onClick={()=>onPinChange(note)} className="fa pin pin-button "></button>
                <div className="dynamic-note">
                  <DynamicNote note={note} style={note.style} id={note.id} info={note.info} type={note.type} />
                </div>
                <button onClick={()=>onDeleteNote(note)} className="fa trash delete-note-btn"></button>
              </article>
            );
          })}
        </section>
      </Fragment>
    )
}

