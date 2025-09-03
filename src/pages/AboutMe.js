import React, {useEffect, useState} from 'react';
import Me from '../Me.jpg'
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import cursorUpdate from "../components/CursorUpdate";
import {motion, useAnimation} from "framer-motion";
import GlobalStyle from "../GlobalStyle";
import {
  AboutMeStyle,
  DescriptionStyle,
  HideStyle,
  ImageStyle,
  TextAnimationContainerStyle,
  BouttonContainerStyle,
  CubeNavHover,
  CubeNav,
} from "../components/Style";
import {
    AboutMeAnimation,
    TitleAnimation,
    Fade,
    ButtonAnimation,
    ImgAnimation,
    CubeNavAnimation,
    HoverCubeNavAnimation,
    DescriptionAnimation
} from "../components/AnimationsFramerMotion";
import Wave from "../components/Wave";
import CV from '../CV ESGI.pdf'
import CursorEffect from "../components/CursorEffect";


function AboutMe(props) {

    const nav = useNavigate(); //on doit faire comme ceci et après donnez à nav la route en paramètre
    const goTo = () => {
        nav('/');
    }

    const [type, setType] = useState(false)
    const [cursor, setCursor] = useState('')

    const DescriptionAnimationControl = useAnimation()
    const ButtonAnimationControl = useAnimation()
    const CubeNavAnimationControl = useAnimation()

    const responsive = window.innerWidth;

    useEffect(()=>{
        setCursor(cursor)
        cursorUpdate('AboutMe')
        CubeNavAnimationControl.start('show')
        if (responsive < 670) {
            DescriptionAnimationControl.start('responsiveShow')
        }else {
            DescriptionAnimationControl.start('show')
        }
        setTimeout(()=>{
            setType(true)
        },3500)
    },[] )


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
                setType(false)
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
            <AboutMeStyle variants={AboutMeAnimation} initial='hidden' animate='show' exit='exit'>
                <DescriptionStyle variants={DescriptionAnimation} initial='hidden' animate={DescriptionAnimationControl} exit='exit'>
                    {/*on separe les phrases pour les animée individuellement*/}
                    <div>
                        <HideStyle>
                            <motion.h2 variants={TitleAnimation} initial='hidden' animate='show' exit='exit'>Hello World !</motion.h2>
                        </HideStyle>
                        <HideStyle>
                            <motion.h2 variants={TitleAnimation} initial='hidden' animate='show' exit='exit'>Bienvenue sur mon</motion.h2>
                        </HideStyle>
                        <HideStyle>
                            <motion.h2 variants={TitleAnimation} initial='hidden' animate='show' exit='exit'><span>portfolio</span>.</motion.h2>
                        </HideStyle>
                    </div>
                    <TextAnimationContainerStyle variants={Fade} initial='hidden' animate='show' exit='exit'>
                        { type && <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        '<p id="pTypeWriter"> Je m\'appelle KHERRAZ Mohammed Achraf,' +
                                        ' je suis étudiant à l\'<strong id="ESGI">ESGI</strong> et je suis\n' +
                                        ' développeur <strong id="special">React !</strong></p>'
                                    )
                                    .callFunction(()=>{
                                        ButtonAnimationControl.start('show')
                                    })
                                    .pauseFor(1500)
                                    .deleteChars(7)
                                    .typeString(
                                        '<p id="pTypeWriter"><strong id="special">JavaScript !</strong></p>'
                                    )
                                    .pauseFor(1200)
                                    .deleteChars(12)
                                    .typeString(
                                        '<p id="pTypeWriter"><strong id="special">Node.JS !</strong></p>'
                                    )
                                    .pauseFor(1000)
                                    .deleteChars(9)
                                    .typeString(
                                        '<p id="pTypeWriter"><strong id="special">PHP !</strong></p>'
                                    )
                                    .pauseFor(1000)
                                    .deleteChars(5)
                                    .typeString(
                                        '<p id="pTypeWriter"><strong id="special">Full-Stack !</strong></p>'
                                    )
                                    .start()
                            }}
                            options={{
                                cursor: '<p id="cursorAboutMe" style="display: inline">_</p>',
                                delay: 30,
                                deleteSpeed: 30
                            }}
                        />}

                        <BouttonContainerStyle>
                            <motion.button onClick={()=>{
                                window.open(CV, '_blank', 'noopener,noreferrer')
                            }} variants={ButtonAnimation} initial='hidden' animate={ButtonAnimationControl} exit='exit'>Télécharger mon CV</motion.button>
                            <motion.button onClick={(e) => {
                                window.location.href = 'mailto:achraf.webdev@gmail.com'
                                e.preventDefault();
                            }} variants={ButtonAnimation} initial='hidden' animate={ButtonAnimationControl} exit='exit'>Me contacter</motion.button>
                        </BouttonContainerStyle>
                    </TextAnimationContainerStyle>
                </DescriptionStyle>
                <ImageStyle>
                    <motion.img variants={ImgAnimation} src={Me} alt="me"/>
                </ImageStyle>
                <Wave/>
            </AboutMeStyle>
        </>

    );
}

export default AboutMe;