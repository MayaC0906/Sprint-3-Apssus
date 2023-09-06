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
            <h2>Search</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Subject: </label>
                <input value={txt} onChange={handleChange} type="text" placeholder="By Subject" id="txt" name="txt" />

                <button>Search</button>
            </form>
        </section>
    )
}

