import { SvgIconMail } from "../../../svg/cmps/SvgIconMail.jsx"
export function MailSideNav() {
    return (
        <section className="side-nav">

            <section className="side-nav-logo">
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'menu' })}
                </div>
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'gmail' })}
                </div>
                <h2>Gmail</h2>
            </section>
            <div className='compose'>
                {SvgIconMail({ iconName: 'pencil' })}
            </div>
            <section className="side-list">
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'inbox' })}
                </div>
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'star' })}
                </div>
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'schedule' })}
                </div>
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'send' })}
                </div>
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'draft' })}
                </div>
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'delete' })}
                </div>
            </section>
        </section>
    )
}