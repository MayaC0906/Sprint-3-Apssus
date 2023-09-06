import { MailPreview } from "./MailPreview.jsx"
//const { Link } = ReactRouterDOM

export function MailList({ emails }) {
    console.log(emails)
    return (
        //  <h1>hi</h1>
        <ul className="mail-list">
            {emails.map((email) =>
                <li key={email.id}>
                    <MailPreview email={email} />
                    <section>
                    </section>
                </li>
            )}
        </ul>
    )
}
