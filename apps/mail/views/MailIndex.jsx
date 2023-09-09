import { MailSideNav } from "../cmps/MailSideNav.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { MailPreview } from "../cmps/MailPreview.jsx"


const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailIndex() {

    const [emails, setEmails] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        mailService.query(filterBy)
            .then(setEmails)
            .catch(err => console.log('err:', err))
    }, [filterBy])

    function onDeleteMail(emailId) {
        mailService.remove(emailId)
            .then(() => {
                setEmails(prevMail => prevMail.filter(email => email.id !== emailId))
            })
            .catch(err => console.log('err:', err))
    }

    function onMailClicked(email) {
        email.isRead = true
        // setIsRead(!isRead)
        // console.log(isRead);
        console.log(email);
        //const classRead = (email.isRead) ? 'read' : 'unread'
    }

    function onSetFilterBy(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    if (!emails) return <div>Loading...</div>
    return (
        <section className="main-layout">

            <section className="main-screen">
                <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
                {/* <MailList emails={emails} onMailClicked={onMailClicked} /> */}
                <MailList emails={emails} onDeleteMail={onDeleteMail} />
            </section>
            <section className="side-nav">
                <MailSideNav />
            </section>
        </section>
    )
}

