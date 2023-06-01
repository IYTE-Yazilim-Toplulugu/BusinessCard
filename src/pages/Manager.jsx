import React from 'react';

import LogoCanvas from "../components/LogoCanvas";
import ImageShadow from "../assets/Rectangle 12.svg";

import CircleLogo from "../assets/circle.png";

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';


const Manager = ({ name, surname, title, insta, github, linkedin, school, department, grade, email, phone, coolImage }) => {
  return (
    <div className="container mx-auto max-w-md min-h-screen h-full bg-blue-900 text-white pb-10 backGround">

      <div className="absolute z-0">
        <img className="relative z-10" src={coolImage} />
        <img className="absolute z-0 top-0" src={ImageShadow} />
      </div>


      <div className="flex flex-col justify-end items-end z-20 px-6">
        <div className="w-32">
          <LogoCanvas />
        </div>

        <div className="flex flex-col items-end justify-end mb-10 z-20">
          <p className="font-bold text-sm">Tel No:</p>
          <p className="font-extralight text-xl">{phone}</p>
        </div>

        <div className="flex flex-col items-end justify-end mb-10 z-20">
          <p className="font-bold text-sm">Email:</p>
          <p className="font-extralight text-lg">{email}</p>
        </div>

        <div className="flex flex-col items-end justify-end mb-10 z-20">
          <p className="font-bold text-sm">Bölüm / Sınıf:</p>
          <p className="font-extralight text-sm">{school}</p>
          <p className="font-extralight text-sm">{department}</p>
          <p className="font-extralight text-sm">{grade}</p>
        </div>

        <div className="flex flex-col items-end justify-end mb-10 z-20">
          <h1 className="font-extrabold text-3xl">{name + " " + surname}</h1>
          <p className="-mt-1 text-sm font-light">{title}</p>
          <div className="flex justify-end items-end mt-2">
            <a href={insta} className="ml-1"><InstagramIcon /></a>
            <a href={linkedin} className="ml-1"><LinkedInIcon /></a>
            <a href={github} className="ml-1"><GitHubIcon /></a>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center px-4 mt-8 z-20">
        <img className="w-24" src={CircleLogo} />

        <div className='z-20'>
          <h2 className="font-extrabold text-xl">İYTE Yazılım Topluluğu</h2>
          <p className="text-sm font-thin -mt-1">İzmir Yüksek Teknoloji Enstitüsü</p>
          <p className="text-sm font-thin -mt-1.5">Bilgisayar Mühendisliği Departmanı</p>

          <p className="font-bold text-lg mt-3">yazilim@iyte.edu.tr</p>

          <div className="flex justify-start mt-2">
            <a href='https://www.instagram.com/iyte_yazilim/' className="mr-2.5"><InstagramIcon /></a>
            <a href='https://www.linkedin.com/company/iyteyazilim/' className="mr-2.5"><LinkedInIcon /></a>
            <a href='https://www.facebook.com/IYTESS' className="mr-2.5"><FacebookIcon /></a>
            <a href='https://github.com/IYTE-Yazilim-Toplulugu' className="mr-2.5"><GitHubIcon /></a>
            <a href='https://www.reddit.com/r/IztechSoftwareSociety/' className="mr-2.5"><RedditIcon /></a>
            <a href='https://www.youtube.com/@iyteyazilimtoplulugu' className="mr-2.5"><YouTubeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manager