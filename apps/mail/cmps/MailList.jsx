import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM

const { useState } = React
export function MailList({ emails }) {
    // console.log(emails)
    //const [isRead, setIsRead] = useState(false)

    function onMailClicked(email) {
        email.isRead = true
        // setIsRead(!isRead)
        // console.log(isRead);
        console.log(email);
        //const classRead = (email.isRead) ? 'read' : 'unread'
    }
    return (
        //  <h1>hi</h1>
        <ul className={"mail-list "}>
            {emails.map((email) =>
                <li key={email.id} onClick={() => onMailClicked(email)} className={(email.isRead) ? 'read' : 'unread'}>
                    <Link to={`/email/${email.id}`}>
                        <MailPreview email={email} />
                    </Link>
                    <section>
                        {/* <button>Link</button> */}
                    </section>
                </li>
            )}
        </ul>
    )
}
