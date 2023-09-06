// mail service
import { utilService } from "../../../services/util.service.js"
import { asyncStorageService } from "../../../services/async-storage.service.js"
import { storageService } from "../../../services/storage.service.js"

const EMAIL_KEY = 'emailDB'
createEmails()

export const emailService = {
    query,
    get,
    getEmptyEmail,
    getDefaultFilter,
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
console.log('user', loggedinUser);

// const criteria = {
//     status: 'inbox/sent/trash/draft',
//     txt: 'puki', // no need to support complex text search
//     isRead: true, // (optional property, if missing: show all)
//     isStared: true, // (optional property, if missing: show all)
//     lables: ['important', 'romantic'] // has any of the labels
// }

function query(filterBy = {}) {
    return storageService.query(EMAIL_KEY)
        .then(emails => {
            if (filterBy.subject) {
                const regExp = new RegExp(filterBy.txt, 'i')
                emails = emails.filter(email => regExp.test(email.subject))
            }
        })
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
        .then(email => {
            return email
        })
}

function getEmptyEmail(subject = '', body = '') {
    return { subject, body }
}

function getDefaultFilter() {
    return { txt: '' }
}

function createEmails() {
    let emails = storageService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
        emails = []
        emails.push(createEmail('Miss you!', 'Would love to catch up sometimes'))
        emails.push(createEmail('Meeting', 'At 16:00'))
        emails.push(createEmail('Buy 2 pay for 1!', 'Only for our fav clients'))
        storageService.saveToStorage(EMAIL_KEY, emails)
        console.log('emails', emails)
    }
}

function createEmail(subject, body) {
    const email = getEmptyEmail(subject, body)
    email.id = utilService.makeId(4)
    email.isRead = false
    email.sentAt = new Date
    email.removedAt = null
    email.from = 'momo@momo.com'
    email.to = 'user@appsus.com'
    return email
}