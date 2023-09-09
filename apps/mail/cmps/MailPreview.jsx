import { SvgIconMail } from "../../../svg/cmps/SvgIconMail.jsx"
import { LongTxt } from "./LongTxt.jsx"

export function MailPreview({ email }) {


    return (
        <article className="email-preview flex space-between">
            <div className="check-star">
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'checkbox' })}
                </div>
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'star' })}
                </div>
            </div>
            <h1>{email.from}</h1>
            <div className="email-body">
                <h2>{email.subject}-</h2>
                <h3><LongTxt txt={email.body} length={email.body.length} /></h3>
            </div>
            <h4>{email.sentAt}</h4>
            {/* <div className='how-to-use'>
                {SvgIconMail({ iconName: 'archive' })}
            </div>
            <div onClick={() => onDeleteMail(email)} className='how-to-use'>
                {SvgIconMail({ iconName: 'delete' })}
            </div>
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'mail' })}
            </div>
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'schedule' })}
            </div> */}
        </article>
    )
}