import React, { useEffect, useState } from 'react'



function miniNavbar() {

    const [data , setData] = useState(null)

    const isLight = useSelector((state) => {
        return state.GlobalState.isLight;
    })

    let parentBg , childBg;

    if(isLight){

    }

    useEffect(() => {
        
        //fetch all topics 

        setData(['hjjhjhj' , 'dhfksdf' , 'skjahfkds' , 'kjfhdskjf']);

    } , [])

  return (
    <div>
        {
            data && 

            <div className='flex justify-around'>
                {
                    data.map((obj , index) => {
                        <p key={index}>{obj}</p>
                    })
                }
            </div>

        }
    </div>
  )
}

export default miniNavbar
