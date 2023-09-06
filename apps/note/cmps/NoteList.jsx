import { DynamicNote } from "./DynamicNote.jsx"


const { Fragment } = React
export function NoteList({onPinChange ,notes }) {

    return (
        <Fragment>
        <section className="notes">
          {notes.map(note => {
            console.log(note.isPinned);
            const bgc = note.style ? note.style.backgroundColor  : "#fcfce3"
            console.log(bgc);
  
            return (
              <article key={note.id} className="note" style={{ backgroundColor: bgc }}>
                <button onClick={()=>onPinChange(note)} className="fa pin pin-button "></button>
                <div className="dynamic-note">
                  <DynamicNote style={note.style} id={note.id} info={note.info} type={note.type} />
                </div>
              </article>
            );
          })}
        </section>
      </Fragment>
    )
}

