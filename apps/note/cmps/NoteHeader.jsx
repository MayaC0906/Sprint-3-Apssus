export function NoteHeader({ onChangeSearch }) {
    return (
        <section className="notes-header">
            <input className="notes-search"  onChange={(ev) => onChangeSearch(ev.target.value)} type="search" placeholder="Search A Note By Title..."/>
            <img className="google-keep-img" src="./assets/img/googleKeep.png" alt="Notes" />
        </section>
    )
}