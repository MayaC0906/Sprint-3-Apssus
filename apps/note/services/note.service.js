// import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { storageService } from '../../../services/storage.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()

export const noteService = {
    query,
    get,
    save,
    getEmptyTxtNote,

}

function query(isTrash) {
    return asyncStorageService.query(NOTE_KEY)
        .then(notes => {
            const queryNote = notes.filter(note => {
                if (!isTrash) return (note.isDeleted === false)
                else return (note.isDeleted === true)
            })
            //   if (filterBy.title) {
            //     const regExp = new RegExp(filterBy.title, 'i')
            //     books = books.filter(book => regExp.test(book.title))
            //   }
            return queryNote
        })
}

function get(noteId) {
    return asyncStorageService.get(NOTE_KEY, noteId)
}

// function toggleIsDeleted(noteId) {
//    return get(noteId)
//         .then(note => {
//             const newNote = { ...note, isDeleted: !note.isDeleted }
//             return newNote
//         })
//         .then(newNote => {
//             asyncStorageService.put(NOTE_KEY, newNote)
//             return newNote
//         })
// }

function save(note) {
    if (note.id) {
        return asyncStorageService.put(NOTE_KEY, note)
    } else {
        return asyncStorageService.post(NOTE_KEY, note)
    }
}

function getEmptyTxtNote() {
    return {
        createdAt: new Date(),
        type: 'NoteTxt',
        isPinned: false,
        isDeleted:false,
        style: {
            backgroundColor: '#FFFFFF'
        },
        info: {
            title: '',
            txt: ''
        }
    }
}

function _createNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: 'n101',
                createdAt: 1112222,
                type: 'NoteTxt',
                isPinned: true,
                isDeleted: false,
                style: {
                    backgroundColor: '#e2f6d3'
                },
                info: {
                    url: '',
                    title: 'I\'m a title',
                    txt: 'Fullstack Me Baby!'
                }
            },
            {
                id: 'n102',
                type: 'NoteTxt',
                isPinned: false,
                isDeleted: false,
                info: {
                    url: 'https://cdn1.byjus.com/wp-content/uploads/blog/2023/03/17131610/STIM_Happy-Baby-Elephant-Running-scaled.jpeg',
                    title: 'Bobi and Me',
                    txt: ''
                },
                style: {
                    backgroundColor: '#d3bfdb'
                }
            },
            {
                id: 'n103',
                type: 'NoteTodos',
                isPinned: false,
                isDeleted: false,
                info: {
                    url: '',
                    title: 'Get my stuff together',
                    todos: [
                        { id: '1', txt: 'Driving license', doneAt: null },
                        { id: '2', txt: 'Coding power', doneAt: 187111111 }
                    ]
                }
            }
        ]
        storageService.saveToStorage(NOTE_KEY, notes)
    }

}

// function getDefaultFilter() {
//   return { title: '', price: '' }
// }

// function getNextBookId(bookId) {
//   return storageService.query(NOTE_KEY)
//     .then(books => {
//       var idx = books.findIndex(book => book.id === bookId)
//       if (idx === books.length - 1) idx = -1
//       return books[idx + 1].id
//     })
// }

function getEmptyNote() {
    return {

    }

}
