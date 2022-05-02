import React from "react";
import "./App.css";
import logo from "./profile.jpg";

const userInfo = {
  name: "Oleksandr",
  about:
    "I have finished it course Web Development in IT 2.0 and have got basic skills: JavaScript, HTML, CSS, VueJS, Git. I'm looking for trainee/junior position.",
  phone: "+380951234567",
  mail: "abcd@mail.com",
};

const App = () => {
  return (
    <div className="container">
      <div className="photo">
        <img src={logo} className="logo-file" alt="profile" />
      </div>
      <div className="profile">
        <h1 className="name">My name is {userInfo.name}</h1>
        <p className="about"><i><b>About:</b></i> {userInfo.about}</p>
        <div className="telephone"><i><b>Telephone:</b></i> {userInfo.phone}</div>
        <div className="mail"><b><i>Mail:</i></b> {userInfo.mail}</div>
      </div>
    </div>
  );
};

export default App;
