import { MailSideNav } from "../cmps/MailSideNav.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function MailDetails() {

    const [email, setEmail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadEmail()
    }, [params.emailId])

    function loadEmail() {
        mailService.get(params.emailId)
            .then(setEmail)
            .catch(err => {
                console.log('err:', err)
                navigate('/email')
            })
    }

    if (!email) return <div>Loading...</div>
    return (
        <section className="details-layout">
            <section className="email-details">
                <h1>{email.subject}</h1>
                <h2>{email.from} {email.sentAt}</h2>
                <h3>{email.body}</h3>
            </section>
            <MailSideNav />
        </section>
    )
}


