export function MailPreview({ email }) {

    return (
        <article className="email-preview flex space-between">
            <input type="checkbox" id="check" name="check" />
            <h1>⭐</h1>
            <h2>{email.from}</h2>
            <h3>{email.subject} {email.body}</h3>
            <h3>{email.sentAt}</h3>
        </article>
    )
}