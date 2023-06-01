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
import { Route, Routes } from "react-router-dom";

import Manager from "./pages/Manager";
import Home from "./pages/Home";

import { members } from "./data";
import ManagerEng from "./pages/ManagerEng";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      {
        members.map((member, i) => <Route path={`/en/${member.url}`} element={<ManagerEng key={i} name={member.name} surname={member.surname} title={member.title.en} insta={member.social.insta} github={member.social.github} linkedin={member.social.linkedin} school={member.school.en} department={member.department.en} grade={member.grade.en} email={member.email} phone={member.phone} coolImage={member.coolImage} />} />)
      }
      {
        members.map((member, i) => <Route path={`/tr/${member.url}`} element={<Manager key={i} name={member.name} surname={member.surname} title={member.title.tr} insta={member.social.insta} github={member.social.github} linkedin={member.social.linkedin} school={member.school.tr} department={member.department.tr} grade={member.grade.tr} email={member.email} phone={member.phone} coolImage={member.coolImage} />} />)
      }
    </Routes>
  );
}

export default App;
