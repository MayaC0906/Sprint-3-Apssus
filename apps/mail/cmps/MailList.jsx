import { SvgIconMail } from "../../../svg/cmps/SvgIconMail.jsx"
import { LongTxt } from "./LongTxt.jsx"
import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM
// console.log(SvgIconMail)
export function MailList({ emails }) {

    return (

        <ul className={"mail-list "}>
            <section className="white-bgc">
                <section className="list-filter">
                    <div className='how-to-use'>
                        {SvgIconMail({ iconName: 'checkbox' })}
                    </div>
                    <div className='how-to-use'>
                        {SvgIconMail({ iconName: 'arrowdown' })}
                    </div>
                    <div className='how-to-use'>
                        {SvgIconMail({ iconName: 'refresh' })}
                    </div>
                    <div className='how-to-use'>
                        {SvgIconMail({ iconName: 'more' })}
                    </div>
                </section>
                <section className="mail-lable">
                    <div className='primary'>
                        {SvgIconMail({ iconName: 'inbox' })} Primary
                    </div>
                    <div className='promotions'>
                        {SvgIconMail({ iconName: 'sell' })} Promotions
                    </div>
                    <div className='social'>
                        {SvgIconMail({ iconName: 'social' })} Social
                    </div>
                    <div className='updates'>
                        {SvgIconMail({ iconName: 'info' })} Updates
                    </div>
                </section>
            </section>
            {emails.map((email) =>
                <li key={email.id} >
                    <Link to={`/email/${email.id}`}>
                        <MailPreview email={email} />
                        {/* <LongTxt txt={email.body} length={email.body.length} /> */}
                    </Link>
                    <section>


                        {/* onClick={() => onDeleteMail(email.id)} */}
                        {/* <button onClick={() => onMailClicked(email)} className={(email.isRead) ? 'read' : 'unread'}>Click</button> */}

                    </section>
                </li>
            )}
        </ul>
    )
}
