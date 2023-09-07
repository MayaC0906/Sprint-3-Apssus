import { useEffect } from 'react'
import SvgIconMail from './SvgIconMail'
import SvgIconNote from './SvgIconNote'

export const HowToUse = () => {

    useEffect(() => {
      
    },[]) 

    return (
        <div className='how-to-use'>
            {SvgIconMail({ iconName: 'search' })}
            {SvgIconNote({ iconName: 'lightBolb' })}
        </div>
    )
}