export function NoteImgPreview({ info, style }) {

    return (
        <div className="note-info img-note">
            <h1>{info.title}</h1>
            <img src={`${info.url}`} />
        </div>
    )
}