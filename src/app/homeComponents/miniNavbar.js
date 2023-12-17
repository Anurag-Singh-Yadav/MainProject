import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';



function miniNavbar() {

    const [data , setData] = useState(null)

    const isLight = useSelector((state) => {
        return state.GlobalState.isLight;
    })

    useEffect(() => {
        
        //fetch all topics 

        setData(['hjjhjhj' , 'dhfksdf' , 'skjahfkds' , 'kjfhdskjf']);

    } , []);

    let parentBgColor = isLight? '#eebefa' : '#adb5bd';

    let contentBgColor = isLight? '#ae3ec9' : '343a40';

  return (
    <div>
        {
            data && 

            <div className={`flex justify-around bg-[${parentBgColor}]`}>
                {
                    data.map((obj , index) => {
                        <p key={index} className={`bg-[${contentBgColor}]`}>{obj}</p>
                    })
                }
            </div>

        }
    </div>
  )
}

export default miniNavbar
