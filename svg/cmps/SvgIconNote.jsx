
import { svgService } from "../services/svg.service.js"

// console.log(SvgIconMail({iconName:'search'}))
export function SvgIconNote({ iconName }) {
    //  console.log('iconName:', iconName);
    const svg = svgService.getKeepSvg(iconName)
    
    return (
        <i dangerouslySetInnerHTML={{ __html: svg }} className='svg-icon'></i>
    )
}
