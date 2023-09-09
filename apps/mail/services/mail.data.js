import { utilService } from "../../../services/util.service.js"
const mailsDB = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e104',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e105',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e106',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e107',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e108',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e109',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e110',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e111',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e112',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e113',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni molestias nemo sed ab ipsum dolore suscipit rerum? Dolorum placeat suscipit iste dicta sint! Quia vero praesentium repudiandae laborum sunt.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
]

export const MailData = {
    getMails,
}

function getMails() {
    return mailsDB
}