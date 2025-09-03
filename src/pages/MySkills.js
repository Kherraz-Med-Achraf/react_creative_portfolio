import React, { useEffect, useState } from "react";
import {
  MySkillsStyle,
  MySkillsTitleH2Style,
  MySkillsContainer,
  SkillsCardContainer,
  VerticalLine,
  MySkillsTitleStyle,
  CubeNavHover,
  CubeNav,
} from "../components/Style";
import {
  MySkillsTitleH2Animation,
  VerticalLineAnimation,
  MySkillsCardAnimation,
  CubeNavAnimation,
  HoverCubeNavAnimation
} from "../components/AnimationsFramerMotion";
import { useNavigate } from "react-router-dom";
import { useAnimation } from "framer-motion";
import GlobalStyle from "../GlobalStyle";
import cursorUpdate from "../components/CursorUpdate";
import HTML from "../Assets/html-5.png";
import CSS from "../Assets/css.png";
import JAVASCRIPT from "../Assets/javascript.png";
import REACT from "../Assets/science.png";
import FIGMA from "../Assets/Figma-Icon.svg";
import FRAMER from "../Assets/motion-graphics.png";
import GS from "../Assets/animation.png";
import STYLE from "../Assets/style-memphis.png";
import REDUX from "../Assets/logo.svg";
import PHP from "../Assets/php.png";
import MYSQL from "../Assets/mysql.png";
import NODE from "../Assets/nodejs.png";
import JAVA from "../Assets/java.png";
import PYHTON from "../Assets/python.png";
import C from "../Assets/letter-c.png";
import CPLUSPLUS from "../Assets/c-.png";
import SYMFONY from "../Assets/computer.png";
import PHPMYADMIN from "../Assets/monitor.png";
import XAMP from "../Assets/serveur.png";
import CursorEffect from "../components/CursorEffect";


function MySkills(props) {

  const [cursor, setCursor] = useState('')


  const nav = useNavigate();
  const goTo = () => {
    nav('/');
  }

  const CubeNavAnimationControl = useAnimation()



  const responsive = window.innerWidth;
  let W;
  console.log(responsive);
  if (responsive < 670) {
    W = "70vw";
  } else {
    W = "50%";
  }

  useEffect(() => {
    setCursor(cursor)
    cursorUpdate("MySkills")
    CubeNavAnimationControl.start('show')
    setTimeout(()=>{
        document.body.style.overflow = 'auto'
    }, 2000)
  }, []);

  return (
      <>
        <CursorEffect/>
        <MySkillsStyle>
        <CubeNavHover
            id="CubeNavhover"
            className="navLink"
            variants={HoverCubeNavAnimation} initial='hidden' animate='show' exit='exit'
            onHoverStart={e => {
              CubeNavAnimationControl.start('hoverIn');
              const CubeNavLottie = document.querySelector('#CubeNav').setSpeed(1)
            }}
            onHoverEnd={e => {
              CubeNavAnimationControl.start('hoverOut');
              const CubeNavLottie = document.querySelector('#CubeNav').setSpeed(0.5)
            }}
            onClick={e => {
              goTo()
            }}
        >
        </CubeNavHover>
        <CubeNav variants={CubeNavAnimation} initial='hidden' animate={CubeNavAnimationControl} exit='exit'>
          <lottie-player
              id='CubeNav'
              autoPlay
              loop
              mode="normal"
              src="https://assets4.lottiefiles.com/private_files/lf30_ogfkvodg.json"
              style={{
                height: '200x',
                width: '200px',
                transform: 'translateX(-50px) translateY(-50px)'
              }}
              speed="0.5"
              intermission="0"
          ></lottie-player>
        </CubeNav>
        <MySkillsTitleH2Style
            variants={MySkillsTitleH2Animation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
          My Skills
        </MySkillsTitleH2Style>
        <MySkillsContainer>
          <SkillsCardContainer
              variants={MySkillsCardAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
          >
            <MySkillsTitleStyle>
              <lottie-player
                  id="middleAnimation"
                  loop
                  autoplay
                  mode="normal"
                  src="https://assets7.lottiefiles.com/packages/lf20_qKxKmw.json"
                  style={{
                    height: "auto",
                    width: W,
                    transform: "translateY(30px)",
                  }}
                  speed="0.5"
                  intermission="0"
              ></lottie-player>
              <h2>Front-End</h2>
            </MySkillsTitleStyle>
            <h3 id="top">Spoken Languages</h3>
            <div className="brands-container">
              <div className="brand">
                <img src={HTML} alt="HtmlLogo" />
                <p>HTML</p>
              </div>
              <div className="brand">
                <img src={CSS} alt="CssLogo" />
                <p>CSS</p>
              </div>
              <div className="brand">
                <img src={JAVASCRIPT} alt="JavaScriptLogo" />
                <p>JavaScript</p>
              </div>
            </div>
            <h3>Frameworks</h3>
            <div className="brands-container">
              <div className="brand">
                <img src={REACT} alt="ReactLogo" />
                <p>React</p>
              </div>
            </div>
            <h3>Tools</h3>
            <div className="brands-container">
              <div className="brand">
                <img src={FIGMA} alt="FigmaLogo" />
                <p>Figma</p>
              </div>
            </div>
            <h3>Library</h3>
            <div id="bot" className="brands-container">
              <div className="brand">
                <img src={FRAMER} alt="FramerLogo" />
                <p>Framer-Motion</p>
              </div>
              <div className="brand">
                <img src={GS} alt="GSLogo" />
                <p>GSAP-GreenSock</p>
              </div>
              <div className="brand">
                <img src={STYLE} alt="StyleLogo" />
                <p>Styled-Components</p>
              </div>
              <div className="brand">
                <img src={REDUX} alt="ReduxLogo" />
                <p>Redux</p>
              </div>
            </div>
          </SkillsCardContainer>
          <VerticalLine
              variants={VerticalLineAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
          ></VerticalLine>
          <SkillsCardContainer
              variants={MySkillsCardAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
          >
            <MySkillsTitleStyle>
              <lottie-player
                  id="middleAnimation"
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets9.lottiefiles.com/private_files/lf30_0UeVUn.json"
                  style={{
                    height: "auto",
                    width: W,
                    transform: "translateY(30px)",
                  }}
                  speed="0.5"
                  intermission="0"
              ></lottie-player>
              <h2>Back-End</h2>
            </MySkillsTitleStyle>
            <h3 id="top">Spoken Languages</h3>
            <div className="brands-container">
              <div className="brand">
                <img src={PHP} alt="PHPLogo" />
                <p>PHP</p>
              </div>
              <div className="brand">
                <img src={NODE} alt="NodeLogo" />
                <p>Node.js</p>
              </div>
              <div className="brand">
                <img src={JAVA} alt="JavaLogo" />
                <p>JAVA</p>
              </div>
              <div className="brand">
                <img src={PYHTON} alt="PythonLogo" />
                <p>PYTHON</p>
              </div>
              <div className="brand">
                <img src={C} alt="CLogo" />
                <p>C</p>
              </div>
              <div className="brand">
                <img src={CPLUSPLUS} alt="C++Logo" />
                <p>C++</p>
              </div>
            </div>
            <h3>Frameworks</h3>
            <div className="brands-container">
              <div className="brand">
                <img src={SYMFONY} alt="Logo" />
                <p>Symfony</p>
              </div>
            </div>
            <h3>Tools</h3>
            <div className="brands-container">
              <div className="brand">
                <img src={PHPMYADMIN} alt="Logo" />
                <p>PhpMyAdmin</p>
              </div>
              <div className="brand">
                <img src={XAMP} alt="Logo" />
                <p>XAMPP</p>
              </div>
            </div>
            <h3>Database</h3>
            <div id="bot" className="brands-container">
              <div className="brand">
                <img src={MYSQL} alt="MySqlLogo" />
                <p>MySQL</p>
              </div>
            </div>
          </SkillsCardContainer>
        </MySkillsContainer>
      </MySkillsStyle>
      </>

  );

  //make body overflow auto after animation
}

export default MySkills;