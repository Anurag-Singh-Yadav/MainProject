const { default: Image } = require("next/image");

import { useSelector } from 'react-redux';
import './flipCard.css'

import React, { useState } from 'react'

function FlipCard(props){

    const {img , text} = props;

    const [flip , setFlip] = useState(false)

    const isLight = useSelector((state) => {
      return state.GlobalState.isLight;
    });

    
    const flipHandler = () => setFlip(!flip);

    return (

        <div onMouseEnter={flipHandler} onMouseLeave={flipHandler} className={"card-container rounded-lg" + (flip ? " flipped" : "")}>
         <div className="front p-2 overflow-hidden flex flex-col justify-center items-center">
          <Image src={img} alt="loading.." loading="lazy" className={`main-area p-2 w-full rounded-lg overflow-hidden mx-auto image-container ${isLight ? 'border-2 border-black' : 'border-2 border-white'} `}/>
          <button className='bg-green-500 text-white px-3 py-2 rounded-full font-semibold my-4 '>Know more</button>
        </div>
        <div className="back">
              <p>{text}</p>
        </div>
        </div>
  
      )
}

export default FlipCard;