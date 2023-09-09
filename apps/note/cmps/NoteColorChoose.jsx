export function NoteColorChoose ({onSetNewNoteColor,isNewColorsShown, onSetNoteColor,note,onSetNewBgc,idx }) {
    function SetNoteColor (color) {
        if (isNewColorsShown) {
            onSetNewNoteColor(color)
        }

        else {
            onSetNoteColor(note, color)
            onSetNewBgc(idx, color)
        }
    }
    return (
        <div className="colorPallete">
            <button onClick={()=>SetNoteColor('#fff8b8')} className="color-btn yellow-button"></button>
            <button onClick={()=>SetNoteColor('#faafa8')} className="color-btn pink-button"></button>
            <button onClick={()=>SetNoteColor('#e2f6d3')} className="color-btn green-button"></button>
            <button onClick={()=>SetNoteColor('#d4e4ed')} className="color-btn blue-button"></button>
            <button onClick={()=>SetNoteColor('#d3bfdb')} className="color-btn purple-button"></button>
            <button onClick={()=>SetNoteColor('#efeff1')} className="color-btn gray-button"></button>
            <button onClick={()=>SetNoteColor('#FFFFFF')} className="color-btn white-button"></button>
        </div>
    )
}