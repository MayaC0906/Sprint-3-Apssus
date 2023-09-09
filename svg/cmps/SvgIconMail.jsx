// import React from 'react'
import { svgService } from "../services/svg.service.js"

// console.log(SvgIconMail({iconName:'search'}))
export function SvgIconMail({ iconName }) {
    //  console.log('iconName:', iconName);
    const svg = svgService.getMailSvg(iconName)
    
    return (
        <i dangerouslySetInnerHTML={{ __html: svg }} className='svg-icon'></i>
    )
}

//export default SvgIconMail


