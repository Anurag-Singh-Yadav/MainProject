"use client";
import React, { useEffect, useState , Component } from 'react'
import Loading from './Loading';
import { useSelector } from 'react-redux';
import './TopicSlider.css'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function TopicSlider() {
    const colors = ['dsa' , 'webDevelopment' , 'competitive' , 'appDevelopment' , 'machineLearning' , 'dataScience'];

    // const [data , setData] = useState(null);

    const [width, setWidth] = useState(window.innerWidth);

    const [cardNumber , setCardNumber] = useState(33)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
          
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if(width > 1500)setCardNumber(22);
            else if(width > 960)setCardNumber(30)
            else if(width > 500) setCardNumber(45);
            else setCardNumber(80);
        };
   
    }, [window.innerWidth]);

    const isLight = useSelector((state) => {
        return state.GlobalState.isLight;
    });

    const arr = {
        dsa : {
            topics : [
                {
                    title: 'Array',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                },
                {
                    title: 'Graph',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                },
                {
                    title: 'Array',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                }
            ],
        },
        webDevelopment : {
            topics : [
                {
                    title: 'HTML',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                },
                {
                    title: 'CSS',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                },
                {
                    title: 'JS',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                }
            ],
        },
        appDevelopment : {
            topics : [
                {
                    title: 'Array',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                },
                {
                    title: 'Array',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                },
                {
                    title: 'Array',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                }
            ],
        },
        interviewCrashCourse: {
            topics : [
                {
                    title: 'Array',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                },
                {
                    title: 'Array',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                },
                {
                    title: 'Array',
                    content : 'In computer science, an array is a data structure consisting of a collection of elements (values or variables), of same memory size, each identified by at least one array index or key.',
                    link : 'www.pornhub.com'
                }
            ],
        },
    }

    const [data , setData] = useState(arr['dsa'].topics);

    const handleClick = (e) => {
        let b = document.getElementsByClassName('active-class');
        for (let i = 0; i < b.length; i++) {
            b[i].classList.remove('active-class');
        }
        e.target.classList.add('active-class');
    }

  return (
    <div className={isLight ? ' bg-[#65a15b] py-3 my-4' : ' bg-highBlue py-3 my-4'}>

            <div className={isLight ? `grid grid-cols-4 justify-between px-1 sm:px-2 md:px-3 lg:px-7  font-sans font-bold text-sm sm:text-base md:text-xl bg-[#65a15b]  transition duration-500` : `grid grid-cols-4 justify-between px-1 sm:px-2 md:px-3 lg:px-7  font-sans font-bold text-xl bg-highBlue transition duration-500 text-white`}>
                <p className=' hover:cursor-pointer hover:bg-yellow-300 py-3 text-center transition duration-700 active-class' onClick={(e) => {setData(arr['dsa'].topics); handleClick(e)}}>DSA</p>
                <p className=' hover:cursor-pointer hover:bg-yellow-300 py-3 text-center transition duration-700' onClick={(e) => {setData(arr['webDevelopment'].topics); handleClick(e)}}>Web-Development</p>
                <p className=' hover:cursor-pointer hover:bg-yellow-300 py-3 text-center transition duration-700' onClick={(e) => {setData(arr['appDevelopment'].topics); handleClick(e)}}>App-Development</p>
                <p className=' hover:cursor-pointer hover:bg-yellow-300 py-3 text-center transition duration-700' onClick={(e) => {setData(arr['interviewCrashCourse'].topics); handleClick(e)}}>Interview crash-course</p>
            </div>
        {
            !data && <Loading />
        }

        {
            data &&

            <div className='flex overflow-hidden sm:overflow-visible '>
                <Carousel infiniteLoop autoPlay interval={3000}  centerMode={true} showStatus={false} stopOnHover={true} showIndicators={false} centerSlidePercentage={cardNumber} showThumbs={false} width={width > 500 ? '100vw' : '90vw'}>
                {
                    data.map((obj, index) => {
                        
                        let { title, content } = obj;
                        let words = content.split(' ');
                        let a = words.slice(0, 25).join(' ');
                        if (words.length > 25) {
                            a += '...';
                        }

                        return (
                            <div key={index} className={` flex flex-col gap-3 justify-center items-center rounded-lg m-3 ${colors[index % 6]} p-2`}>
                                <p className='font-bold'>{title}</p>
                                <p>{a}</p>
                                <a className='px-4 py-2 bg-green-500 text-black hover:bg-dimWhite border-2 border-green-500 rounded-lg hover:text-green-500 transition duration-700' to={'/'}>Read more</a>
                            </div>
                        );
                    })
                }
                </Carousel>
            </div>
        }

    </div>
  )
}

export default TopicSlider
