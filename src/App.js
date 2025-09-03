import React from "react";
import GlobalStyle from "./GlobalStyle";
import {Routes, Route, useLocation} from "react-router-dom";
import HubControl from "./pages/HubControl";
import EnterAnimation from "./components/EnterAnimation";
import AboutMe from "./pages/AboutMe";
import MySkills from "./pages/MySkills";
import MyWork from "./pages/MyWork";
import Attributions from "./pages/Attributions";
import {AnimatePresence} from "framer-motion";


function App() {

    const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle/>
      <AnimatePresence exitBeforeEnter onExitComplete={()=>{
          window.scrollTo(0,0)
      }}>
          <Routes basename={process.env.PUBLIC_URL} location={location} key={location.key}>
            <Route path="/" exact element={<HubControl/>}/>
            <Route path="/enteranimation" exact element={<EnterAnimation/>}/>
            <Route path="/aboutme" exact element={<AboutMe/>}/>
            <Route path="/myskills" exact element={<MySkills/>}/>
            <Route path="/mywork" exact element={<MyWork/>}/>
            <Route path="/attributions" exact element={<Attributions/>}/>
          </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
