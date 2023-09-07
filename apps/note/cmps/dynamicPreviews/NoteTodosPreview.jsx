import { noteService } from "../../services/note.service.js"
const { useState, useEffect } = React

export function NoteTodosPreview({ note, info }) {

    const  [todoNote, setNote] = useState(note)

    const [done, setDone] = useState(todoNote.info.todos.filter(todo => (todo.doneAt)))
    const  [notDone, setNotDone] = useState(todoNote.info.todos.filter(todo => (!todo.doneAt)))

    useEffect (()=>{
        setDone(todoNote.info.todos.filter(todo => (todo.doneAt)))
    }, [todoNote])

    useEffect (()=>{
        setNotDone(todoNote.info.todos.filter(todo => (!todo.doneAt)))
    }, [todoNote])

    function onChangeToDo(id) {
        let todoIdx = todoNote.info.todos.findIndex(todo=> todo.id===id)
        let currDoneState = todoNote.info.todos[todoIdx].doneAt
        currDoneState = currDoneState ? null : Date.now()
        let newNote = todoNote.info.todos[todoIdx].doneAt = currDoneState
        newNote = ({...note ,...newNote})
        setNote(prevnote=> ({...prevnote, ...newNote}))
        noteService.save(newNote)
    }

    return <div className="note-info todo-note">
        <h1>{info.title}</h1>
        {notDone.length>0 && 
        <ul >
            {notDone.map((todo) =>
                <li key={todo.id} className="notDone" onClick={() => onChangeToDo(todo.id)}> {todo.txt}</li>
            )
            }
        </ul>
        }

        {done.length>0 && <ul>
            {done.map((todo) =>
                <li key={todo.id}  className="done" onClick={() => onChangeToDo(todo.id)}> {todo.txt}</li>
            )
            }
        </ul>
        }
    </div>
}