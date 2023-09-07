import { SvgIconMail } from "../../../svg/cmps/SvgIconMail.jsx"

export function MailPreview({ email }) {

    function onCheck(email) {
        console.log(email.subject)
    }
    return (
        <article className="email-preview flex space-between">
            {/* <div> {SvgIconMail({ iconName: 'search' })}</div> */}
            <input type="checkbox" id="check" name="check" onInput={() => onCheck(email)} />
            <h1>⭐</h1>
            <h2>{email.from}</h2>
            <h3>{email.subject} {email.body}</h3>
            <h3>{email.sentAt}</h3>
        </article>
    )
}