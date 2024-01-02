import React from 'react';
import RenderLetters from './RenderLetters';

function IDE() {
  return (
    <div className='flex bg-slate-900 text-dimWhite px-3 md:px-5 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] cursor-pointer'>
      <div>
        {
          (() => {
            const elements = [];
            for (let i = 0; i < 22; i++) {
              elements.push(<div key={i} className=' border-r-[1px] border-r-white'>{i+1}</div>);
            }
            return elements;
          })()
        }
      </div>
      <div>
        <RenderLetters></RenderLetters>
      </div>
    </div>
  );
}

export default IDE;
