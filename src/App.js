import LogoCanvas from "./components/LogoCanvas";
import Image from "./assets/Mask group.png";
import ImageShadow from "./assets/Rectangle 12.svg";

import BasicLogo from "./assets/png-colorful.png";
import CircleLogo from "./assets/circle.png";


import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';

function App() {
  return (
    <div className="container mx-auto max-w-md min-h-screen h-full bg-blue-900 text-white pb-10 backGround">

      <div className="absolute z-0">
        <img className="relative z-10" src={Image} />
        <img className="absolute z-0 top-0" src={ImageShadow} />
      </div>

      {/* <img src={BasicLogo} className="relative opacity-10 right-0 bottom-0 z-0 w-72" /> */}

      <div className="flex flex-col justify-end items-end z-20 px-6">
        <div className="w-32">
          <LogoCanvas />
        </div>

        <div className="flex flex-col items-end justify-end mb-10 z-20">
          <p className="font-bold text-sm">Tel No:</p>
          <p className="font-extralight text-xl">+90 553 198 35 75</p>
        </div>

        <div className="flex flex-col items-end justify-end mb-10 z-20">
          <p className="font-bold text-sm">Email:</p>
          <p className="font-extralight text-lg">dogukantopcu35@gmail.com</p>
        </div>

        <div className="flex flex-col items-end justify-end mb-10 z-20">
          <p className="font-bold text-sm">Bölüm / Sınıf:</p>
          <p className="font-extralight text-sm">İzmir Yüksek Teknoloji Enstitüsü</p>
          <p className="font-extralight text-sm">Bilgisayar Mühendisliği</p>
          <p className="font-extralight text-sm">1. Sınıf</p>
        </div>

        <div className="flex flex-col items-end justify-end mb-10 z-20">
          <h1 className="font-extrabold text-3xl">Doğukan TOPÇU</h1>
          <p className="-mt-1 text-sm font-light">Topluluk Başkanı</p>
          <div className="flex justify-end items-end mt-2">
            <a className="ml-1"><InstagramIcon /></a>
            <a className="ml-1"><LinkedInIcon /></a>
            <a className="ml-1"><GitHubIcon /></a>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center px-4 mt-8">
        <img className="w-24" src={CircleLogo} />

        <div>
          <h2 className="font-extrabold text-xl">İYTE Yazılım Topluluğu</h2>
          <p className="text-sm font-thin -mt-1">İzmir Yüksek Teknoloji Enstitüsü</p>
          <p className="text-sm font-thin -mt-1.5">Bilgisayar Mühendisliği Departmanı</p>

          <p className="font-bold text-lg mt-3">yazilim@iyte.edu.tr</p>

          <div className="flex justify-start mt-2">
            <a className="mr-2.5"><InstagramIcon /></a>
            <a className="mr-2.5"><LinkedInIcon /></a>
            <a className="mr-2.5"><FacebookIcon /></a>
            <a className="mr-2.5"><GitHubIcon /></a>
            <a className="mr-2.5"><RedditIcon /></a>
            <a className="mr-2.5"><YouTubeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
