export function NoteSideNav({onSetIsTrash, isTrash}){
    let myNotesclass =isTrash? '' : 'chosen'
    let recycleBinclass =isTrash? 'chosen' : ''
    return <section className="note-side-nav">
        <button className={"nav-btn " + myNotesclass}  onClick={()=>onSetIsTrash(false)}>My Notes</button>
        <button className={"nav-btn " + recycleBinclass} onClick={()=>onSetIsTrash(true)}>Recycle Bin</button>
    </section> 
}