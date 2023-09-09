export function NoteTxtPreview({info}) {

    return <div className="note-info txt-note">
        {info.url && <img src={`${info.url}`} />}
        <h2 className="note-title">{info.title}</h2>
        {info.txt && <h3 className="note-txt">{info.txt}</h3>}
    </div>
}