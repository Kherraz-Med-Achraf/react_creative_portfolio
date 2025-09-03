import React, {useState} from 'react';
import {
  MyWorkStyle,
  MyWorkTitleH2Style,
  ProjetCardContainerStyle,
  ProjetCardStyle,
  CubeNavHover,
  CubeNav,
} from "../components/Style";
import {Projects} from "../ProjectsData";
import {useEffect} from "react";

import cursorUpdate from "../components/CursorUpdate";
import { v4 as uuidv4 } from 'uuid';
import VanillaTilt from 'vanilla-tilt';
import {
  ProjetCardContainerAnimation,
  MyWorkCardAnimation,
  MyWorksTitleH2Animation,
  CubeNavAnimation,
  HoverCubeNavAnimation
} from "../components/AnimationsFramerMotion";
import {useAnimation} from "framer-motion";
import {useNavigate} from "react-router-dom";
import CursorEffect from "../components/CursorEffect";

function MyWork(props) {

    const [cursor, setCursor] = useState({})

    const nav = useNavigate(); //on doit faire comme ceci et après donnez à nav la route en paramètre
    const goTo = () => {
        nav('/');
    }

    const CubeNavAnimationControl = useAnimation()

    const newTab = (url) => {
        window.open(url, '_blank')
    }



    useEffect(() => {
        setCursor(cursor)
        cursorUpdate("MyWork")
        CubeNavAnimationControl.start('show')
        setTimeout(()=>{
            document.body.style.overflow = 'auto'
        }, 2000)
        const element = document.querySelectorAll(".TiltEffect");
        VanillaTilt.init(element,
        {
            reverse:                false,  // reverse the tilt direction
            max:                    20,     // max tilt rotation (degrees)
            perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
            scale:                  1,      // 2 = 200%, 1.5 = 150%, etc..
            speed:                  1000,    // Speed of the enter/exit transition
            transition:             true,   // Set a transition on enter/exit.
            reset:                  true,   // If the tilt effect has to be reset on exit.
            easing:                 "cubic-bezier(.03,.98,.52,.99)",
            glare:                  false,  // if it should have a "glare" effect
            "max-glare":            0.5,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
            "glare-prerender":      false
            }
        );

    }, []);



    return (
        <>
            <CursorEffect/>
            <MyWorkStyle>
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
            <MyWorkTitleH2Style variants={MyWorksTitleH2Animation} initial='hidden' animate='show' exit='exit'>My Projects</MyWorkTitleH2Style>
            <ProjetCardContainerStyle variants={ProjetCardContainerAnimation} initial='hidden' animate='show'>
                {Projects.map( project => {
                    return (
                        <ProjetCardStyle key={uuidv4()} className='TiltEffect'
                                         variants={MyWorkCardAnimation} exit={{
                            scale: 0,
                            transition: {
                                duration: 0.5,
                            }}}
                        >
                            <div className='project-image-container'>
                                <img src={project.frontIMG} alt={`${project.title} preview`}/>
                            </div>
                            <div className='project-content'>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <h3>Technical environment</h3>
                                <div className='Tech'>
                                    {project.techs.map(tech => {
                                        return (
                                            <h3 key={uuidv4()}>{tech}</h3>
                                        )
                                    })}
                                </div>
                                <div className='MyWorkbot'>
                                    {project.url && <button id='left' onClick={()=> {
                                        newTab(project.url)
                                    }}>See Demo</button> }
                                    {project.gitUrl && <button id='right' onClick={()=> {
                                        newTab(project.gitUrl)
                                    }}>Github Code</button>}
                                </div>
                            </div>
                        </ProjetCardStyle>
                    )
                })}
            </ProjetCardContainerStyle>


        </MyWorkStyle>
        </>

    );
}

export default MyWork;