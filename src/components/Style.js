import styled from "styled-components";
import {motion} from "framer-motion";

export const EnterAnimationStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  
  h1 {
    z-index: 2;
    background: #F8F9FA;
  }
`

export const HubControlPageStyle = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  @media (max-width: 670px) {
    font-size: 70%;
  }
`

export const LogoStyle = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100px;
    height: 100px;
  }
`

export const HubControlStyle = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  .hovered-link {
    color: #F8F9FA;
    transition: all 0.3s ease;
    transition-property: color;
  }
  h2 {
    z-index: 2;
    font-size: 1.3rem;
    cursor: none;
  }
  #hover {
    position:fixed ;
    top: 29%;
    z-index: 20;
    width: 170px;
    height: 240px;
    cursor: none;
    @media (max-width: 670px) {
      width: 100px;
      height: 125px;
    }
  }
`

export const BottomNavStyle = styled(motion.div)`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 100%;
  h2 {
    margin-bottom: 2px;
    overflow: hidden;
  }
  .hovered-link {
    color: #F8F9FA;
    transition: all 0.3s ease;
    transition-property: color;
  }
`

export const SocialBarStyle = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  #verticalLine {
    background: #1b1b1b;
    margin-top: 20px;
    margin-bottom: 15px;
    @media (max-width: 670px) {
      margin-bottom: 50px;
    }
  }
  .socialIcon {
    opacity: 1;
    overflow: hidden;    
  }
`

export const HorizontalNavStyle = styled.div`
  .hovered-link {
    color: #F8F9FA;
    transition: all 0.3s ease;
    transition-property: color;
  }
  #leftNav {
    z-index: 2;
    writing-mode: vertical-lr;
    text-orientation: sideways;
    position: fixed;
    top: 20%;
  }
  #rightNav {
    z-index: 2;
    writing-mode: vertical-lr;
    position: fixed;
    transform: rotate(180deg);
    right: 0;
    top: 20%;
    text-decoration: none;
  }
`

export const CursorEffectStyle = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid #1b1b1b;
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.3s ease;
  transition-property: background, transform;
  transform-origin: 50% 50%;
  z-index: 2;
  @media (max-width: 670px) {
    opacity: 0;
  }
`
//AboutMePage

export const AboutMeStyle = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #F8F9FA;
  button {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #F8F9FA;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover {
      background-color: #23d997;
      color: #F8F9FA;
    }
  }
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  a {
    font-size: 1.1rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  p {
    padding: 3rem 0;
    font-size: 1.4rem;
    line-height: normal;
  }
  #ESGI {
    color: cyan;
  }
  #special {
    font-weight: bold;
    font-size: 1.4rem;
    color: #23d997;
  }
  #cursorAboutMe {
    color: #F8F9FA;
  }
  @media (max-width: 670px) {
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding: 90px 10px 0 10px;
    h2 {
      font-size: 3rem;
    }
    span {
      font-size: 3rem;
    }
    #special {
      font-size: 2rem;
    }
  }
`;

export const DescriptionStyle = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 670px) {
    justify-content: center;
    padding: 0;
    border: 2px solid #1b1b1b;
    box-shadow: 3px 7px 10px #23d997;
  }
`

export const TextAnimationContainerStyle = styled.div`
  height: 234px;
  margin-top: 50px;
  span {
    font-size: 1.5rem;
  }
  #pTypeWriter {
    display: inline;
    font-weight: lighter;
    padding: 3rem 0;
    font-size: 1.5rem;
    line-height: normal;
  }
  @media (max-width: 670px) {
    height: 150px;
    width: 380px;
    transform: translateY(-20px);
    padding: 0;
    span {
      font-size: 2rem;
    }
    #pTypeWriter {
      font-size: 2rem;
    }
  }
`

export const BouttonContainerStyle = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  overflow: hidden;
  @media (max-width: 670px) {
    justify-content: space-around;
  }
`


export const ImageStyle = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {     //nesting SASS thing
    width: 90%;
    height: 80vh;
    object-fit: cover;
  }
  @media (max-width: 670px) {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      border: 2px solid #1b1b1b;
      box-shadow: 3px 7px 10px #23d997;
      width: 70%;
      height: auto;
      object-fit: contain;
    }
  }
`

export const HideStyle = styled.div`
    overflow: hidden;
`

export const WaveSVGStyle = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
  @media (max-width: 670px) {
    opacity: 0;
  }
`

//MySkills Page

export const MySkillsStyle = styled(motion.div)`
  min-height: 100vh;
  padding: 0 5rem;
  background: #1b1b1b;
`

export const MySkillsTitleH2Style = styled(motion.h2)`
  font-family: 'Lobster', cursive;
  color: #F8F9FA;
  text-align: center;
  margin-bottom: 10px;
`

export const MySkillsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width: 1775px) {
    gap: 100px;
  }
`

export const SkillsCardContainer = styled(motion.div)`
  height: 760px;
  width: 470px;
  background: #F8F9FA;
  border-radius: 3%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border: 2px solid #1b1b1b;
  .brands-container{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 0 10px 0;
  }
  .brand {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    img {
      height: 40px;
      width: 40px;
    }
  }
  #top {
    margin-top: 50px;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    transform: translateY(50px);
    color: #F8F9FA;
    background: #1b1b1b;
    width: 200px;
    text-align: center;
    border-radius: 10%;
  }
  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  p {
    color: #000000;
    padding: 0 5px;
    font-size: 1rem;
    margin: 5px;
  }
  #bot {
    margin: 0;
  }
`

export const MySkillsTitleStyle = styled(motion.div)`
  background: #23d997;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 3%;
`

export const VerticalLine = styled(motion.div)`
  background: #F8F9FA;
  position: fixed;
  top: 70px;
  z-index: 2;
  @media (max-width: 1775px) {
    opacity: 0;
    display: none;
    visibility: hidden;
  }
`

//MyWork Page

export const MyWorkStyle = styled(motion.div)`
  height: auto;
  min-height: 100vh;
  padding: 0 5rem 5rem;
  background: #1b1b1b;
`

export const MyWorkTitleH2Style = styled(motion.h2)`
  font-family: 'Lobster', cursive;
  color: #F8F9FA;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
`

export const ProjetCardContainerStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`

export const ProjetCardStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 490px;
  width: 400px;
  background: #F8F9FA;
  margin: 30px;
  border-radius: 20px;
  box-shadow: 0 0 35px #23d997;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  img {
    object-fit: contain;
    width: 100%;
    border-bottom: 1px solid #23d997;
    border-radius: 20px 20px 0 0;
  }
  h2 {
    font-size: 1.2rem;
    color: #1b1b1b;
    text-align: center;
    margin: 20px;
  }
  h3 {
    font-size: 1rem;
    margin: 10px;
    text-align: center;
  }
  p {
    color: #000000;
    padding: 0 5px;
    font-size: 1rem;
    margin: 5px;
    text-align: center;
    transform-style: preserve-3d;
    transform: translateZ(20px);
  }
  .Tech {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 10px;
    transform-style: preserve-3d;
    transform: translateZ(20px);
    h3 {
      font-size: 1.1rem;
      margin: 3px;
      color: #000000;
      padding: 1px;
      border: 1px solid #1b1b1b;
      box-shadow: 0 0 10px #23d997;
    }
  }
  .MyWorkbot {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    button {
      height: 100%;
      width: 100%;
      background: #23d997;
      font-weight: bold;
      font-size: 1.1rem;
      padding: 1rem 2rem;
      border: none;
      color: #F8F9FA;
      transition: all 0.5s ease;
      font-family: 'Inter', sans-serif;
      &:hover {
        background-color: #1b1b1b;
        color: #F8F9FA;
      }
      @media (max-width: 670px) {
        font-size: 1.5rem;
      }
    }
    #left {
      border-radius: 0 0 0 20px;
    }
    #right {
      border-radius: 0 0 20px 0;
    }
  }
  @media (max-width: 670px) {
    height: 350px;
  }
`

//Attributions

export const AttributionsContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #1b1b1b;
`

export const AttributionsMiddleStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  
  background: #F8F9FA;
  h2 {
    font-size: 5rem;
    font-family: 'Lobster', cursive;
    color: #1b1b1b;
    text-align: center;
    margin: 20px;
  }
`
export const AttributionsStyle = styled(motion.div)`
  width: 80%;
  height: 100%;
  background: #F8F9FA;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  
`

export const AttributionStyle = styled(motion.div)`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border: 2px solid #1b1b1b;
  box-shadow: 3px 7px 10px #23d997 ;
  margin: 20px;
  a {
    height: 100%;
    width: 100%;
    background: #23d997;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem;
    border: none;
    color: #F8F9FA;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover {
      background-color: #1b1b1b;
      color: #F8F9FA;
    }
  }
  img {
    width: 200px;
    height: 200px;
  
`


//CubeNav

export const CubeNavHover = styled(motion.div)`
  position: fixed;
  height: 90px;
  width: 90px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
`

export const CubeNav = styled(motion.div)`
  position: fixed;
  height: 200px;
  width: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`

