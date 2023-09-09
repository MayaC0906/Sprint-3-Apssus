// import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { storageService } from '../../../services/storage.service.js'

const NOTE_KEY = 'noteDB'
const DELETE_NOTE = 'deletednoteDB'

_createNotes()

export const noteService = {
    query,
    get,
    save,
    getEmptyTxtNote,
    remove
}

function query(filterBy) {
    let searchKey = filterBy.searchKey
    let key = filterBy.isTrash? DELETE_NOTE : NOTE_KEY 

    return asyncStorageService.query(key)
        .then(notes => { 
            if (searchKey) {
                const regExp = new RegExp(searchKey, 'i')
                notes = notes.filter(note => regExp.test(note.info.title))
              }
            return notes
        })
}
        // const queryNote = notes.filter(note => {
        //     if (!isTrash) return (note.isDeleted === false)
        //     else return (note.isDeleted === true)
            //   if (filterBy.title) {
            //     const regExp = new RegExp(filterBy.title, 'i')
            //     books = books.filter(book => regExp.test(book.title))
            //   }
        


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

function remove(note) {
    if (note.isDeleted) {
        return asyncStorageService.remove(DELETE_NOTE,note.id)
    }
    else {
        return (
         asyncStorageService.remove(NOTE_KEY,note.id)
         .then (asyncStorageService.post(DELETE_NOTE,{...note, isDeleted:true}))
    )}
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
                isPinned: false,
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
                type: 'NoteTxt',
                isPinned: true,
                isDeleted: false,
                info: {
                    url: '',
                    title: 'Java script is fun',
                    txt: 'You shout make your google keep'
                },
                style: {
                    backgroundColor: '#faafa8'
                }
            },
            {
                id: 'n104',
                type: 'NoteTxt',
                isPinned: false,
                isDeleted: false,
                info: {
                    url: 'https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
                    title: 'Monkeis',
                    txt: 'Is it possible not to love them?'
                },
                style: {
                    backgroundColor: '#d4e4ed'
                }
            },
            {
                id: 'n105',
                type: 'NoteTxt',
                isPinned: false,
                isDeleted: false,
                info: {
                    url: '',
                    title: 'At va ani ken',
                    txt: 'ah ah ah'
                },
                style: {
                    backgroundColor: '#efeff1'
                }
            },
            {
                id: 'n106',
                type: 'NoteTxt',
                isPinned: true,
                isDeleted: false,
                info: {
                    url: '',
                    title: 'Riptide',
                    txt: 'I was scared of dentists and the dark'
                },
                style: {
                    backgroundColor: '#d4e4ed'
                }
            },
            {
                id: 'n107',
                type: 'NoteTxt',
                isPinned: true,
                isDeleted: false,
                info: {
                    url: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?cs=srgb&dl=pexels-files-1648377.jpg&fm=jpg',
                    title: 'Don\'t know this baby',
                    txt: ''
                },
                style: {
                    backgroundColor: '#FFFFFF'
                }
            },
            {
                id: 'n108',
                type: 'NoteTodos',
                isPinned: false,
                isDeleted: false,
                style: {
                    backgroundColor: ''
                },
                info: {
                    url: '',
                    title: 'Get my stuff together',
                    todos: [
                        { id: '1', txt: 'Driving license', doneAt: null },
                        { id: '2', txt: 'Coding power', doneAt: 187111111 }
                    ]
                }
            },
            {
                id: 'n109',
                type: 'NoteTodos',
                isPinned: true,
                isDeleted: false,
                style: {
                    backgroundColor: '#d3bfdb'
                },
                info: {
                    url: '',
                    title: 'After this sprint',
                    todos: [
                        { id: '1', txt: 'Sleep', doneAt: null },
                        { id: '2', txt: 'More sleep', doneAt: null },
                        { id: '3', txt: 'Another sleep', doneAt: 187111111 }
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
