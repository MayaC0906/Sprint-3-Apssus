import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"


const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailIndex() {

    const [emails, setEmails] = useState(null)
     //const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

    //useEffect(() => {
    //     mailService.query(filterBy)
    //         .then(emails => setEmails(emails))
    //         .catch(err => console.log('err:', err))
    //}, )
    //[filterBy]
    // function onSetFilterBy(filterBy) {
    //     setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    // }

    if (!emails) return <div>Loading...</div>
    return (
        <section className="main-layout">

            <section className="main-screen">
                <div>main screen</div>
                <MailList email={emails} />
            </section>
            <section className="side-nav">
                <div>side nav</div>
            </section>
        </section>
    )
}

