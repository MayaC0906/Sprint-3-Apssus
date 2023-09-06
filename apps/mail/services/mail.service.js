// mail service
import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"

const EMAIL_KEY = 'emailDB'

console.log('emails', createEmails());

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
console.log('user', loggedinUser);

const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
}



function getEmptyEmail(subject = '', body = '') {
    return { subject, body }
}

function createEmails() {
    let emails = []
    emails.push(createEmail('Miss you!', 'Would love to catch up sometimes'))
    emails.push(createEmail('Meeting', 'At 16:00'))
    emails.push(createEmail('Buy 2 pay for 1!', 'Only for our fav clients'))
    return emails
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