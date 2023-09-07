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
                <h2>{email.subject}</h2>
                <h3>{email.from} {email.sentAt}</h3>
                <h1>{email.body}</h1>
            </section>
        </section>
    )
}


