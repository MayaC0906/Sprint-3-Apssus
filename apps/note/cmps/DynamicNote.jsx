

import { NoteTxtPreview } from "./dynamicPreviews/NoteTxtPreview.jsx"
import { NoteImgPreview } from "./dynamicPreviews/NoteImgPreview.jsx"
import { NoteTodosPreview } from "./dynamicPreviews/NoteTodosPreview.jsx"

export function DynamicNote (props) {
    switch (props.type) {
        case 'NoteTxt':
            return <NoteTxtPreview {...props} />

        case 'NoteTodos':
            return <NoteTodosPreview {...props} />

        default:
            return null
    }
}