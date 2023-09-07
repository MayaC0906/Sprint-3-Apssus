export function NoteTxtPreview({ info, style }) {
    console.log('hiTxt');

    return <div className="note-info txt-note">
        <h1>{info.title}</h1>
        <h3>{info.txt}</h3>
    </div>
}