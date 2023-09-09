import { SvgIconMail } from "../../../svg/cmps/SvgIconMail.jsx"
export function MailSideNav() {
    return (
        <section className="side-list">
            <section className="side-nav">
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'menu' })}
                </div>
                <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'gmail' })}
                </div>
                <h2>Gmail</h2>
            </section>
            <div className='how-to-use'>
                    {SvgIconMail({ iconName: 'pencil' })}
                </div>
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
        </section>
    )
}