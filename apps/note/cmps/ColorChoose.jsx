export function ColorChoose ({onSetNoteColor,isColorsShown }) {
    return (
        <div className={isColorsShown?'':'hidden'}>
            <button onClick={()=>onSetNoteColor('#fff8b8')} className="color-btn yellow-button"></button>
            <button onClick={()=>onSetNoteColor('#faafa8')} className="color-btn pink-button"></button>
            <button onClick={()=>onSetNoteColor('#e2f6d3')} className="color-btn green-button"></button>
            <button onClick={()=>onSetNoteColor('#d4e4ed')} className="color-btn blue-button"></button>
            <button onClick={()=>onSetNoteColor('#d3bfdb')} className="color-btn purple-button"></button>
            <button onClick={()=>onSetNoteColor('#efeff1')} className="color-btn gray-button"></button>
        </div>
    )
}