import { SvgIconMail } from "../../../svg/cmps/SvgIconMail.jsx"
import { MailHelp } from "./MailHelp.jsx"
const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilterBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilterBy(filterByToEdit)
    }

    const { txt } = filterByToEdit
    return (

        <section className="email-filter">
            {/* <h2>Search</h2> */}
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'search' })}
            </div>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt"> </label>
                <input className="input-search" value={txt} onChange={handleChange} type="text" placeholder="Search mail" id="txt" name="txt" />
            </form>
            <div className='how-to-use'>
                {SvgIconMail({ iconName: 'tune' })}
            </div>
            {/* <div>
                <button>Read</button>
                <button>Unread</button>
            </div> */}
            <section>
        </section>
        
        {/* <MailHelp /> */}
    </section>
    )
}

