import { SvgIconMail } from "../../../svg/cmps/SvgIconMail.jsx"

export function MailPreview({ email }) {

   
    return (
        <article className="email-preview flex space-between">
            {/* <div> {SvgIconMail({ iconName: 'search' })}</div> */}
            {/* <input type="checkbox" id="check" name="check" onInput={() => onCheck(email)} /> */}
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'checkbox' })}
            </div>
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'star' })}
            </div>
            <h2>{email.from}</h2>
            <h3>{email.subject} {email.body}</h3>
            <h3>{email.sentAt}</h3>
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'archive' })}
            </div>
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'delete' })}
            </div>
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'mail' })}
            </div>
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'schedule' })}
            </div>
        </article>
    )
}