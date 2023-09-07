import SvgIconMail from "../../../svg/cmps/SvgIconMail.jsx"
import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM

export function MailList({ emails }) {

    return (
        <ul className={"mail-list "}>
            {emails.map((email) =>
                <li key={email.id} >
                    <Link to={`/email/${email.id}`}>
                        <MailPreview email={email} />
                    </Link>
                    <section>
                        {/* <div className='how-to-use'>
                            {SvgIconMail({ iconName: 'questMark' })}
                        </div> */}



                        {/* {SvgIconNote({ iconName: 'lightBolb' })} */}
                        {/* </div> */}
                        {/* onClick={() => onDeleteMail(email.id)} */}
                        {/* <button onClick={() => onMailClicked(email)} className={(email.isRead) ? 'read' : 'unread'}>Click</button> */}

                    </section>
                </li>
            )}
        </ul>
    )
}
