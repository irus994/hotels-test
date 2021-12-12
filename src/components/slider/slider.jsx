import React from 'react';

import image from './hotel.png'

export default function Slider() {
   return (
       <ul className="slider">
           <li className="slider__item"><img className="slider__img" src={image}/></li>
           <li className="slider__item"><img className="slider__img" src={image}/></li>
           <li className="slider__item"><img className="slider__img" src={image}/></li>
           <li className="slider__item"><img className="slider__img" src={image}/></li>
           <li className="slider__item"><img className="slider__img" src={image}/></li>
           <li className="slider__item"><img className="slider__img" src={image}/></li>
           <li className="slider__item"><img className="slider__img" src={image}/></li>
       </ul>
   );
}
