import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function MailDetails() {

    const [email, setEmail] = useState(null)
    const params = useParams()

    useEffect(() => {
        loadEmail()
    }, [params.emailId])

    function loadEmail() {
        mailService.get(params.emailId)
            .then(setEmail)
            .catch(err => {
                console.log('err:', err)
            })
    }

    if (!email) return <div>Loading...</div>
    return (
        <section className="email-details">
            <h1>Email Subject: {email.subject}</h1>
        </section>
    )
}


