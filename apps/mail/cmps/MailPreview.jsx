export function MailPreview({ email }) {
    return (
        <article className="email-preview">
            <h1>email:{email.subject}</h1>
        </article>
    )
}