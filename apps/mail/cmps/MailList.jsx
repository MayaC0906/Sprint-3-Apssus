import { MailPreview } from "./MailPreview.jsx"


export function MailList({ emails }) {
    console.log(emails)
    return (
        <ul className="mail-list">
            {emails.map(email =>
                <li key={email.id}>
                    <MailPreview email={email} />
                    <section>
                        <h2>Hi</h2>
                    </section>
                </li>
            )}
        </ul>
    )
}
