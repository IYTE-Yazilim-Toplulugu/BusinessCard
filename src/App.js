import { Route, Routes } from "react-router-dom";

import Manager from "./pages/Manager";
import Home from "./pages/Home";

import { members } from "./data";
import ManagerEng from "./pages/ManagerEng";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/en" element={<Home />} />
      {
        members.map((member, i) => <Route key={i} path={`/en/${member.url}`} element={<ManagerEng key={i} name={member.name} surname={member.surname} title={member.title.en} insta={member.social.insta} github={member.social.github} linkedin={member.social.linkedin} school={member.school.en} department={member.department.en} grade={member.grade.en} email={member.email} phone={member.phone} coolImage={member.coolImage} />} />)
      }
      {
        members.map((member, i) => <Route key={i} path={`/tr/${member.url}`} element={<Manager key={i} name={member.name} surname={member.surname} title={member.title.tr} insta={member.social.insta} github={member.social.github} linkedin={member.social.linkedin} school={member.school.tr} department={member.department.tr} grade={member.grade.tr} email={member.email} phone={member.phone} coolImage={member.coolImage} />} />)
      }
    </Routes>
  );
}

export default App;
