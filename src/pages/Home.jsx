import React, { useState } from 'react';

import { members } from '../data';

import BasicLogo from "../assets/png-colorful.png";
import Blob from "../assets/members/blob.svg";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [lang, setLang] = useState(true);
    const navigation = useNavigate();
  return (
    <div className='container mx-auto max-w-md min-h-screen h-full bg-blue-900 text-white pb-10 backGround'>

        <div className='relative top-2 left-0'>
            {
                lang ? (
                    <p className='py-2 cursor-pointer'><span className='font-bold px-2 pl-4 text-green-300' onClick={() => setLang(true)}>Türkçe</span> | <span className='font-bold px-2'  onClick={() => setLang(false)}>English</span></p>
                ) : (
                    <p className='py-2 cursor-pointer'><span className='font-bold px-2 pl-4' onClick={() => setLang(true)}>Türkçe</span> | <span className='font-bold px-2 text-green-300'  onClick={() => setLang(false)}>English</span></p>
                )
            }
            
        </div>

        <div className='flex justify-center items-center pt-20'>
            <img src={BasicLogo} alt="Iztech Software Society Logo" className='h-48' />
        </div>

        {
            lang ? (
                <h1 className='text-center mt-16 font-extrabold text-2xl'>Yönetim Kurulu Üyeleri</h1>
            ) : (
                <h1 className='text-center mt-16 font-extrabold text-2xl'>Society Board Members</h1>
            )
        }


        <div className='grid grid-cols-2 px-4 my-12'>

            {
                members.map((member, i) => (
                    <div className='cursor-pointer' key={i} onClick={() => lang ? navigation(`/tr/${member.url}`) : navigation(`/en/${member.url}`) }>
                        <div className='flex justify-center items-center'>
                            <img src={Blob} alt="bg" className='absolute z-0 lg:hidden w-[50vw] -mt-16' />
                            <img className="mask z-10" src={member.image} alt="member" />
                        </div>
                        <div className='flex flex-col justify-center items-center -mt-16 z-20'>
                            <h2 className='font-bold text-lg text-center'>{member.name + " " + member.surname}</h2>
                            <p className='font-light text-sm -mt-1.5 text-center'>{lang ? member.title.tr : member.title.en}</p>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Home