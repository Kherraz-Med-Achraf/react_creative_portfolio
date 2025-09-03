import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import GlobalStyle from "../GlobalStyle";
import cursorUpdate from "../components/CursorUpdate";
import {
  HubControlPageAnimation,
  LogoAnimation,
  MiddleAnimation,
  HoverMiddleAnimation,
  ClickAnimation,
  BottomNavAnimation,
  HorizontalLeftNavAnimation,
  HorizontalRightNavAnimation,
  SocialBarAnimation,
  LinkedInSocialIconsAnimation,
  GithHubSocialIconsAnimation,
  InstagramSocialIconsAnimation,
  FacebookSocialIconsAnimation
} from "../components/AnimationsFramerMotion";
import {HubControlPageStyle, LogoStyle, HubControlStyle, BottomNavStyle, HorizontalNavStyle, SocialBarStyle} from "../components/Style";
import KMA from '../KMA.png'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import {useNavigate,} from 'react-router-dom'
import CursorEffect from "../components/CursorEffect";



function HubControl(props) {




    const nav = useNavigate();
    const goTo = () => {
        nav('/enteranimation');
    }
    const goToAboutMe = () => {
        nav('/aboutme');
    }
    const next = useSelector(state => state.enterAnimation)
    const middleAnimationControl = useAnimation()
    const HoverMiddleAnimationControl = useAnimation()
    const ClickAnimationControl = useAnimation()
    const BottomNavAnimationControl = useAnimation()
    const HorizontalLeftNavAnimationControl = useAnimation()
    const HorizontalRightNavAnimationControl = useAnimation()
    const LinkedInSocialIconsAnimationControl = useAnimation()
    const GithHubSocialIconsAnimationControl = useAnimation()
    const InstagramSocialIconsAnimationControl = useAnimation()
    const FacebookSocialIconsAnimationControl = useAnimation()
    const LogoAnimationControl = useAnimation()

    const responsive = window.innerWidth
    let W
    let H



    if (responsive < 670) {
        W = '70vw';
        H = '70vw';
    }else {
        W = '500px';
        H = '500px';
    }

    useEffect(() => {
        const lottiAnimationsIcons = document.querySelectorAll('.lottiSocialIcon')
        lottiAnimationsIcons.forEach((icon) => {
            icon.play()
        })
        if (next) {

                middleAnimationControl.start('show')
                const middleLottie = document.querySelector('#middleAnimation').play()
                LogoAnimationControl.start('show')
                HoverMiddleAnimationControl.start('show')
                LinkedInSocialIconsAnimationControl.start('show')
                GithHubSocialIconsAnimationControl.start('show')
                InstagramSocialIconsAnimationControl.start('show')
                FacebookSocialIconsAnimationControl.start('show')
                BottomNavAnimationControl.start('show')
                HorizontalRightNavAnimationControl.start('rotation')
                HorizontalRightNavAnimationControl.start('show')
                HorizontalLeftNavAnimationControl.start('show')
                ClickAnimationControl.start('show')



        }else {
            goTo() //pour afficher EnterAnimation qu'une fois
        }


    },[next])

    useEffect(()=>{
        setTimeout(()=>{
            cursorUpdate('HubControl')
        },1000)
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <>
            <CursorEffect/>
            <HubControlPageStyle variants={HubControlPageAnimation} initial='hidden' animate='show' exit='exit'>
                <LogoStyle variants={LogoAnimation} initial='hidden' animate={LogoAnimationControl}>
                    <img id='logo' src={KMA} alt="logo"/>
                </LogoStyle>
                <HubControlStyle>
                    <motion.div
                        id="hover"
                        className="navLink"
                        variants={HoverMiddleAnimation} initial='hidden' animate={HoverMiddleAnimationControl}
                        onHoverStart={e => {
                            middleAnimationControl.start('hoverIn');
                            ClickAnimationControl.start('hoverIn');
                            const middleLottie = document.querySelector('#middleAnimation').setSpeed(1)
                        }}
                        onHoverEnd={e => {
                            middleAnimationControl.start('hoverOut');
                            ClickAnimationControl.start('hoverOut');
                            const middleLottie = document.querySelector('#middleAnimation').setSpeed(0.5)
                        }}
                        onClick={e => {
                            goToAboutMe()
                        }}
                    ></motion.div>
                    <motion.div  variants={MiddleAnimation} initial='hidden' animate={middleAnimationControl}>
                        <lottie-player
                            id="middleAnimation"
                            loop
                            mode="normal"
                            src="https://assets4.lottiefiles.com/private_files/lf30_ogfkvodg.json"
                            style={{
                                height: H,
                                width: W,
                            }}
                            speed="0.5"
                            intermission="0"
                        ></lottie-player>
                    </motion.div>
                    <div className='clickCss'>
                        <motion.h2
                            id="click"
                            variants={ClickAnimation} initial='hidden' animate={ClickAnimationControl}
                            onHoverStart={e => {
                                middleAnimationControl.start('hoverIn');
                                ClickAnimationControl.start('hoverIn');
                                const middleLottie = document.querySelector('#middleAnimation').setSpeed(1)
                            }}
                            onHoverEnd={e => {
                                middleAnimationControl.start('hoverOut');
                                ClickAnimationControl.start('hoverOut');
                                const middleLottie = document.querySelector('#middleAnimation').setSpeed(0.5)
                            }}
                            onClick={e => {
                                goToAboutMe()
                            }}
                        >
                            Click on me
                        </motion.h2>
                    </div>

                </HubControlStyle>
                <BottomNavStyle variants={BottomNavAnimation} initial='hidden' animate={BottomNavAnimationControl}>
                    <h2 className="botNav">
                        <Link className="navLink" to="/aboutme">
                            About me
                        </Link>
                    </h2>
                    <h2 className="botNav">
                        <Link className="navLink" to="/myskills">
                            My Skills
                        </Link>
                    </h2>
                </BottomNavStyle>
                <HorizontalNavStyle>
                    <motion.h2 id="leftNav" variants={HorizontalLeftNavAnimation} initial={'hidden'} animate={HorizontalLeftNavAnimationControl}>
                        <Link className="navLink" to="/mywork">
                            My Work
                        </Link>
                    </motion.h2>
                    <motion.h2 id="rightNav" variants={HorizontalRightNavAnimation} initial={'hidden'} animate={HorizontalRightNavAnimationControl}>
                        <Link className="navLink" to="/attributions">
                            Attributions
                        </Link>
                    </motion.h2>
                </HorizontalNavStyle>

                <SocialBarStyle>
                    <motion.div
                        className="socialIcon"
                        onHoverStart={e => {
                            LinkedInSocialIconsAnimationControl.start('hoverIn');
                            const mouseCursor = document.querySelector('#cursor');
                            mouseCursor.classList.add('linkedin-grow')
                            const socialIcons = document.querySelectorAll('.socialIcon')
                            socialIcons.forEach((socialIcon)=>{
                                socialIcon.style.overflow = 'visible';
                            })

                        }}
                        onHoverEnd={e => {
                            LinkedInSocialIconsAnimationControl.start('hoverOut');
                            const mouseCursor = document.querySelector('#cursor')
                            mouseCursor.classList.remove('linkedin-grow')
                        }}
                        onClick={()=>{
                            window.open('https://www.linkedin.com/in/mohammed-achraf-kherraz', '_blank', 'noopener,noreferrer')
                        }}
                    >
                        <motion.div variants={LinkedInSocialIconsAnimation} initial='hidden' animate={LinkedInSocialIconsAnimationControl}>
                            <lottie-player
                                class="lottiSocialIcon"
                                id="linkedin"
                                loop
                                mode="normal"
                                src="https://assets4.lottiefiles.com/packages/lf20_0Cm1Y2.json"
                                style={{height: "6vh", width: "6vh"}}
                                speed="0.3"
                                intermission="0"
                            ></lottie-player>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="socialIcon"
                        onHoverStart={e => {
                            GithHubSocialIconsAnimationControl.start('hoverIn');
                            const mouseCursor = document.querySelector('#cursor');
                            mouseCursor.classList.add('github-grow')
                            const socialIcons = document.querySelectorAll('.socialIcon')
                            socialIcons.forEach((socialIcon)=>{
                                socialIcon.style.overflow = 'visible';
                            })

                        }}
                        onHoverEnd={e => {
                            GithHubSocialIconsAnimationControl.start('hoverOut');
                            const mouseCursor = document.querySelector('#cursor')
                            mouseCursor.classList.remove('github-grow')
                        }}
                        onClick={()=>{
                            window.open('https://github.com/Kherraz-Med-Achraf', '_blank', 'noopener,noreferrer')
                        }}
                    >
                        <motion.div variants={GithHubSocialIconsAnimation} initial='hidden' animate={GithHubSocialIconsAnimationControl}>
                            <lottie-player
                                class="lottiSocialIcon"
                                id="github"
                                loop
                                mode="normal"
                                src="https://assets7.lottiefiles.com/private_files/lf30_1ldonjtk.json"
                                style={{height: "6vh", width: "6vh"}}
                                speed="0.3"
                                intermission="0"
                            ></lottie-player>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="socialIcon"
                        onHoverStart={e => {
                            InstagramSocialIconsAnimationControl.start('hoverIn');
                            const mouseCursor = document.querySelector('#cursor');
                            mouseCursor.classList.add('instagram-grow')
                            const socialIcons = document.querySelectorAll('.socialIcon')
                            socialIcons.forEach((socialIcon)=>{
                                socialIcon.style.overflow = 'visible';
                            })

                        }}
                        onHoverEnd={e => {
                            InstagramSocialIconsAnimationControl.start('hoverOut');
                            const mouseCursor = document.querySelector('#cursor')
                            mouseCursor.classList.remove('instagram-grow')
                        }}
                        onClick={()=>{
                            window.open('https://www.instagram.com/ash_elpsycongroo', '_blank', 'noopener,noreferrer')
                        }}
                    >
                        <motion.div variants={InstagramSocialIconsAnimation} initial='hidden' animate={InstagramSocialIconsAnimationControl}>
                            <lottie-player
                                class="lottiSocialIcon"
                                id="instagram"
                                loop
                                mode="normal"
                                src="https://assets10.lottiefiles.com/packages/lf20_3s913D.json"
                                style={{height: "6vh", width: "6vh"}}
                                speed="0.3"
                                intermission="0"
                            ></lottie-player>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="socialIcon"
                        onHoverStart={e => {
                            FacebookSocialIconsAnimationControl.start('hoverIn');
                            const mouseCursor = document.querySelector('#cursor');
                            mouseCursor.classList.add('facebook-grow')
                            const socialIcons = document.querySelectorAll('.socialIcon')
                            socialIcons.forEach((socialIcon)=>{
                                socialIcon.style.overflow = 'visible';
                            })

                        }}
                        onHoverEnd={e => {
                            FacebookSocialIconsAnimationControl.start('hoverOut');
                            const mouseCursor = document.querySelector('#cursor')
                            mouseCursor.classList.remove('facebook-grow')
                        }}
                        onClick={()=>{
                            window.open('https://www.facebook.com/achraf.kherraz', '_blank', 'noopener,noreferrer')
                        }}
                    >
                        <motion.div variants={FacebookSocialIconsAnimation} initial='hidden' animate={FacebookSocialIconsAnimationControl}>
                            <lottie-player
                                class="lottiSocialIcon"
                                id="facebook"
                                loop
                                mode="normal"
                                src="https://assets1.lottiefiles.com/packages/lf20_Joz0FE.json"
                                style={{height: "6vh", width: "6vh"}}
                                speed="0.3"
                                intermission="0"
                            ></lottie-player>
                        </motion.div>
                    </motion.div>
                    <motion.div id="verticalLine" variants={SocialBarAnimation} initial='hidden' animate='show'></motion.div>
                </SocialBarStyle>
            </HubControlPageStyle>
        </>

    );
}
export default HubControl;