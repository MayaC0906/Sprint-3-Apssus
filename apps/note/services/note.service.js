// import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { storageService } from '../../../services/storage.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()

export const noteService = {
    query,
    // get,
    // remove,
    // save,
    // getDefaultFilter,
    // getNextBookId,
    // getEmptyBook,
    // addReview

}

function query() {
    return asyncStorageService.query(NOTE_KEY)
        .then(notes => {
            //   if (filterBy.title) {
            //     const regExp = new RegExp(filterBy.title, 'i')
            //     books = books.filter(book => regExp.test(book.title))
            //   }
            //   if (filterBy.price) {
            //     books = books.filter(book => book.listPrice.amount >= filterBy.price)
            //   }
            console.log(notes)
            return notes
        })
}

function get(noteId) {
    return asyncStorageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return asyncStorageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return asyncStorageService.put(NOTE_KEY, note)
    } else {
        return asyncStorageService.post(NOTE_KEY, note)
    }
}

function _createNotes() {
    //console.log('hi')
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: 'n101',
                createdAt: 1112222,
                type: 'NoteTxt',
                isPinned: true,
                style: {
                    backgroundColor: '#00d'
                },
                info: {
                    txt: 'Fullstack Me Baby!'
                }
            },
            {
                id: 'n102',
                type: 'NoteImg',
                isPinned: false,
                info: {
                    url: 'http://some-img/me',
                    title: 'Bobi and Me'
                },
                style: {
                    backgroundColor: '#00d'
                }
            },
            {
                id: 'n103',
                type: 'NoteTodos',
                isPinned: false,
                info: {
                    title: 'Get my stuff together',
                    todos: [
                        { txt: 'Driving license', doneAt: null },
                        { txt: 'Coding power', doneAt: 187111111 }
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
