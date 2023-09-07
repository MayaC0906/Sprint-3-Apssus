import React from 'react';
import { svgService } from '../services/svg.service';

function SvgIconNote({ iconName }) {
//  console.log('iconName:', iconName);
 const svg = svgService.getKeepSvg(iconName);

 return (
  <i dangerouslySetInnerHTML={{ __html: svg }} className='svg-icon'></i>
 );
}

export default SvgIconNote;
