export function NoteTxtPreview({info}) {

    return <div className="note-info txt-note">
        <h2>{info.title}</h2>
        {info.url && <img src={`${info.url}`} />}
        {info.txt && <h3>{info.txt}</h3>}
    </div>
}