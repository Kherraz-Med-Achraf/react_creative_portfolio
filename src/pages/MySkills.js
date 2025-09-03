import React, { useEffect, useState } from "react";
import {
  MySkillsStyle,
  MySkillsTitleH2Style,
  NewSkillsContainer,
  SkillCategoryCard,
  SkillItem,
  CubeNavHover,
  CubeNav,
} from "../components/Style";
import {
  MySkillsTitleH2Animation,
  MySkillsCardAnimation,
  CubeNavAnimation,
  HoverCubeNavAnimation
} from "../components/AnimationsFramerMotion";
import { useNavigate } from "react-router-dom";
import { useAnimation } from "framer-motion";

import cursorUpdate from "../components/CursorUpdate";
import CursorEffect from "../components/CursorEffect";
import HTML from "../Assets/html-5.png";
import CSS from "../Assets/css.png";
import JAVASCRIPT from "../Assets/javascript.png";
import REACT from "../Assets/science.png";
import NODE from "../Assets/nodejs.png";
import PHP from "../Assets/php.png";
import GIT from "../Assets/GitHub-Mark-120px-plus.png";
import MYSQL from "../Assets/mysql.png";
import MOTION_ONE from "../Assets/animation.png";


function MySkills(props) {
  // URLs pour les icônes des nouvelles technologies
  const TYPESCRIPT = "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg";
  const SCSS = "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg";
  const VUE = "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg";
  const NEST = "https://cdn.simpleicons.org/nestjs/E0234E";
  const DOCKER = "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg";
  const MONGODB = "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg";
  const POSTGRESQL = "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg";
  const WORDPRESS = "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg";
  const FRAMER = "https://cdn.simpleicons.org/framer/0055FF";
  const GSAP = "https://cdn.simpleicons.org/greensock/88CE02";

  const [cursor, setCursor] = useState('')

  const nav = useNavigate();
  const goTo = () => {
    nav('/');
  }

  const CubeNavAnimationControl = useAnimation()

  // Organisation des compétences par catégories
  const skillsData = {
    frontend: {
      title: "Front-End Development",
      icon: "💻",
      skills: [
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
        { name: "JavaScript", icon: JAVASCRIPT },
        { name: "TypeScript", icon: TYPESCRIPT },
        { name: "SCSS", icon: SCSS },
        { name: "React", icon: REACT },
        { name: "Vue.js", icon: VUE }
      ]
    },
    backend: {
      title: "Back-End Development", 
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: NODE },
        { name: "PHP", icon: PHP },
        { name: "NestJS", icon: NEST }
      ]
    },
    database: {
      title: "Databases",
      icon: "🗄️", 
      skills: [
        { name: "MySQL", icon: MYSQL },
        { name: "MongoDB", icon: MONGODB },
        { name: "PostgreSQL", icon: POSTGRESQL }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: GIT },
        { name: "Docker", icon: DOCKER },
        { name: "WordPress", icon: WORDPRESS }
      ]
    },
    animation: {
      title: "Animation Libraries",
      icon: "🎨",
      skills: [
        { name: "Framer Motion", icon: FRAMER },
        { name: "Motion One", icon: MOTION_ONE },
        { name: "GSAP", icon: GSAP }
      ]
    }
  };

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
                height: '200px',
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
        <NewSkillsContainer
            variants={MySkillsCardAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
          {Object.entries(skillsData).map(([key, category]) => (
            <SkillCategoryCard key={key}>
              <div className="category-header">
                <span className="category-emoji">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <div className="skill-icon">
                      <img src={skill.icon} alt={`${skill.name} logo`} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </SkillItem>
                ))}
              </div>
            </SkillCategoryCard>
          ))}
        </NewSkillsContainer>
      </MySkillsStyle>
      </>

  );

  //make body overflow auto after animation
}

export default MySkills;