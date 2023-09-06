import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"
import { asyncStorageService } from "../../../services/async-storage.service.js"
import { MailData } from "./mail.data.js"

const EMAIL_KEY = 'emailDB'
const gFilterBy = { txt: '' }
_createEmails()

export const mailService = {
    query,
    get,
    getFilterBy,
    setFilterBy,
    getEmptyEmail,
    getDefaultFilter
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
    return asyncStorageService.query(EMAIL_KEY)
        .then(emails => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                emails = emails.filter(email => regExp.test(email.subject))
            }
            return emails
        })
}

function get(emailId) {
    return asyncStorageService.get(EMAIL_KEY, emailId)
        .then(email => {
            return email
        })
}

function getEmptyEmail(subject = '', body = '') {
    return { subject, body }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    return gFilterBy
}

function getDefaultFilter() {
    return { txt: '' }
}

function _createEmails() {
    let emails = storageService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
        emails = MailData.getMails()
        storageService.saveToStorage(EMAIL_KEY, emails)
    }
}

// emails = []
// emails.push(_createEmail('Miss you!', 'Would love to catch up sometimes'))
// emails.push(_createEmail('Meeting', 'At 16:00 were going to have a nice'))
// emails.push(_createEmail('Buy 2 pay for 1!', 'Only for our fav clients are'))
// console.log('emails', emails)

// function _createEmail(subject, body) {
//     const email = getEmptyEmail(subject, body)
//     email.id = utilService.makeId(4)
//     email.isRead = false
//     email.sentAt = utilService.getMonthName(new Date)
//     email.removedAt = null
//     email.from = 'momo@momo.com'
//     email.to = 'user@appsus.com'
//     return email
// }