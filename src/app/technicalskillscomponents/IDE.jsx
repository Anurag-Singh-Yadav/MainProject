import React from 'react';
import RenderLetters from './RenderLetters';

function IDE() {
  return (
    <div className='flex bg-slate-900 text-dimWhite px-3 md:px-5'>
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
