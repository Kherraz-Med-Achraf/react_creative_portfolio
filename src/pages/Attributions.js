import React, {useState} from 'react';
import {useEffect} from "react";
import GlobalStyle from "../GlobalStyle";
import cursorUpdate from "../components/CursorUpdate";
import {
  AttributionsContainerStyle,
  AttributionsMiddleStyle,
  AttributionsStyle,
  AttributionStyle,
  CubeNavHover,
  CubeNav,
} from "../components/Style";
import {
  AttributionsH2Animation,
  AttributionsAnimation,
  AttributionAnimation,
  CubeNavAnimation,
  HoverCubeNavAnimation
} from "../components/AnimationsFramerMotion";
import {motion, useAnimation} from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as LottiePlayer from "@lottiefiles/lottie-player";
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

function Attributions(props) {

    const [cursor, setCursor] = useState('')

    const CubeNavAnimationControl = useAnimation()


    const nav = useNavigate(); //on doit faire comme ceci et après donnez à nav la route en paramètre
    const goTo = () => {
        nav('/');
    }
    
    
    
    useEffect(()=>{
        setCursor(cursor)
        cursorUpdate('Attributions')
        CubeNavAnimationControl.start('show')
        setTimeout(()=>{
            document.body.style.overflow = 'auto'
        }, 2000)
    }, [])

    return (
        <>
            <CursorEffect/>
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
            <AttributionsContainerStyle>
                <AttributionsMiddleStyle variants={AttributionsAnimation} initial='hidden' animate='show' exit='exit'>
                    <motion.h2 variants={AttributionsH2Animation} initial='hidden' animate='show' exit='exit'>Attributions</motion.h2>
                    <AttributionsStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <lottie-player
                                AutoPlay
                                loop
                                mode="normal"
                                src="https://assets4.lottiefiles.com/private_files/lf30_ogfkvodg.json"
                                style={{
                                    height: '200px',
                                    width: '200px',
                                }}
                                speed="0.5"
                                intermission="0"
                            ></lottie-player>
                            <a href="https://lottiefiles.com/ision_industries" title="6 Cube Shifter #1" target='_blank' rel="noreferrer">Animation créée par Ision Industries</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <lottie-player
                                AutoPlay
                                loop
                                mode="normal"
                                src="https://assets9.lottiefiles.com/packages/lf20_qKxKmw.json"
                                style={{
                                    height: '200px',
                                    width: '200px',
                                }}
                                speed="0.5"
                                intermission="0"
                            ></lottie-player>
                            <a href="https://lottiefiles.com/vulestefanovic" title="Web design" target='_blank' rel="noreferrer">Animation créée par Vule Stefanovic</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <lottie-player
                                AutoPlay
                                loop
                                mode="normal"
                                src="https://assets9.lottiefiles.com/private_files/lf30_0UeVUn.json"
                                style={{
                                    height: '200px',
                                    width: '200px',
                                }}
                                speed="0.5"
                                intermission="0"
                            ></lottie-player>
                            <a href="https://lottiefiles.com/vulestefanovic" title="Server" target='_blank' rel="noreferrer">Animation créée par Vule Stefanovic</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <lottie-player
                                AutoPlay
                                loop
                                mode="normal"
                                src="https://assets1.lottiefiles.com/packages/lf20_0Cm1Y2.json"
                                style={{
                                    height: '200px',
                                    width: '200px',
                                }}
                                speed="0.5"
                                intermission="0"
                            ></lottie-player>
                            <a href="https://lottiefiles.com/lordicon" title="LinkedIn Social Media Icon" target='_blank' rel="noreferrer">Animation créée par Lordicon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <lottie-player
                                AutoPlay
                                loop
                                mode="normal"
                                src="https://assets5.lottiefiles.com/packages/lf20_3s913D.json"
                                style={{
                                    height: '200px',
                                    width: '200px',
                                }}
                                speed="0.5"
                                intermission="0"
                            ></lottie-player>
                            <a href="https://lottiefiles.com/lordicon" title="Instagram Social Media Icon" target='_blank' rel="noreferrer">Animation créée par Lordicon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <lottie-player
                                AutoPlay
                                loop
                                mode="normal"
                                src="https://assets5.lottiefiles.com/packages/lf20_Joz0FE.json"
                                style={{
                                    height: '200px',
                                    width: '200px',
                                }}
                                speed="0.5"
                                intermission="0"
                            ></lottie-player>
                            <a href="https://lottiefiles.com/lordicon" title="Facebook Social Media Icon" target='_blank' rel="noreferrer">Animation créée par Lordicon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <lottie-player
                                AutoPlay
                                loop
                                mode="normal"
                                src="https://assets4.lottiefiles.com/private_files/lf30_1ldonjtk.json"
                                style={{
                                    height: '200px',
                                    width: '200px',
                                }}
                                speed="0.5"
                                intermission="0"
                            ></lottie-player>
                            <a href="https://lottiefiles.com/m77ckaayr6" title="GitHub icon" target='_blank' target='_blank' rel="noreferrer">Animation créée par Zoran Otrupcak</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={HTML} alt="HTMLLogo"/>
                            <a href="https://www.flaticon.com/fr/icones-gratuites/html-5" title="html 5 icônes" target='_blank' rel="noreferrer">Html 5 icônes créées par Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={CSS} alt="CSSLogo"/>
                            <a href="https://www.flaticon.com/fr/icones-gratuites/css" title="css icônes" target='_blank' rel="noreferrer">Css icônes créées par Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={JAVASCRIPT} alt="JAVASCRIPTLogo"/>
                            <a href="https://www.flaticon.com/fr/icones-gratuites/javascript" title="javascript icônes" target='_blank' rel="noreferrer">Javascript icônes créées par Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={REACT} alt="REACTLogo"/>
                            <a href="https://www.flaticon.com/free-icons/nuclear" title="nuclear icons" target='_blank' rel="noreferrer">Nuclear icons created by itim2101 - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={FIGMA} alt="FIGMALogo"/>
                            <a href="https://www.figma.com/" title="animation icons" target='_blank' rel="noreferrer">Figma icon “not affiliated with Figma”</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={FRAMER} alt="FRAMERLogo"/>
                            <a href="https://www.flaticon.com/free-icons/animation" title="animation icons" target='_blank' rel="noreferrer">Animation icons created by Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={GS} alt="GSLogo"/>
                            <a href="https://www.flaticon.com/free-icons/animation" title="animation icons" target='_blank' rel="noreferrer">Animation icons created by IconKanan - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={STYLE} alt="STYLELogo"/>
                            <a href="https://www.flaticon.com/free-icons/art-and-design" title="art and design icons" target='_blank' rel="noreferrer">Art and design icons created by Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={REDUX} alt="REDUXLogo"/>
                            <a href="https://react-redux.js.org/" title="REDUX" target='_blank' rel="noreferrer">REDUX Logo</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={PHP} alt="PHPLogo"/>
                            <a href="https://www.flaticon.com/fr/icones-gratuites/php" title="php icônes" target='_blank' rel="noreferrer">Php icônes créées par Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={MYSQL} alt="MYSQLLogo"/>
                            <a href="https://www.flaticon.com/fr/icones-gratuites/mysql" title="mysql icônes" target='_blank' rel="noreferrer">Mysql icônes créées par Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={NODE} alt="NODELogo"/>
                            <a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons" target='_blank' rel="noreferrer">Nodejs icons created by Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={JAVA} alt="JAVALogo"/>
                            <a href="https://www.flaticon.com/free-icons/java" title="java icons" target='_blank' rel="noreferrer">Java icons created by Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={PYHTON} alt="PYTHONLogo"/>
                            <a href="https://www.flaticon.com/free-icons/python" title="python icons" target='_blank' rel="noreferrer">Python icons created by Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={C} alt="CLogo"/>
                            <a href="https://www.flaticon.com/free-icons/letter-c" title="letter c icons" target='_blank' rel="noreferrer">Letter c icons created by Hight Quality Icons - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={CPLUSPLUS} alt="CPLUSPLUSLogo"/>
                            <a href="https://www.flaticon.com/free-icons/c-" title="c++ icons" target='_blank' rel="noreferrer">C++ icons created by Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={SYMFONY} alt="SYMFONYLogo"/>
                            <a href="https://www.flaticon.com/free-icons/anti-virus-software" title="anti virus software icons" target='_blank' rel="noreferrer">Anti virus software icons created by Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={PHPMYADMIN} alt="PHPMYADMINLogo"/>
                            <a href="https://www.flaticon.com/free-icons/computer" title="computer icons" target='_blank' rel="noreferrer">Computer icons created by Freepik - Flaticon</a>
                        </AttributionStyle>
                        <AttributionStyle variants={AttributionAnimation} initial='hidden' animate='show' exit='exit'>
                            <img src={XAMP} alt="XAMPLogo"/>
                            <a href="https://www.flaticon.com/fr/icones-gratuites/serveur" title="serveur icônes" target='_blank' rel="noreferrer">Serveur icônes créées par juicy_fish - Flaticon</a>
                        </AttributionStyle>
                    </AttributionsStyle>
                </AttributionsMiddleStyle>
            </AttributionsContainerStyle>
        </>
    );
}

export default Attributions;