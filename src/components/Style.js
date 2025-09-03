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

export const NewSkillsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 30px 10px;
  }
`

export const SkillCategoryCard = styled(motion.div)`
  background: linear-gradient(145deg, #F8F9FA 0%, #f0f0f0 100%);
  border-radius: 20px;
  padding: 24px;
  border: 2px solid rgba(35, 217, 151, 0.1);
  box-shadow: 
    0 20px 40px rgba(35, 217, 151, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #23d997, #1ea776);
    border-radius: 20px 20px 0 0;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 30px 60px rgba(35, 217, 151, 0.15),
      0 15px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(35, 217, 151, 0.3);
  }

  .category-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid rgba(35, 217, 151, 0.1);
    
    .category-emoji {
      font-size: 2.5rem;
      background: linear-gradient(135deg, #23d997, #1ea776);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(2px 2px 4px rgba(35, 217, 151, 0.3));
    }
    
    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1b1b1b;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;
    
    @media (max-width: 480px) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
    }
  }
`

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(35, 217, 151, 0.1);
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      0 10px 25px rgba(35, 217, 151, 0.2),
      0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: rgba(35, 217, 151, 0.3);
    
    .skill-icon img {
      transform: scale(1.1);
    }
    
    .skill-name {
      color: #23d997;
    }
  }

  .skill-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    background: linear-gradient(135deg, rgba(35, 217, 151, 0.1), rgba(35, 217, 151, 0.05));
    border-radius: 12px;
    padding: 8px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 0.3s ease;
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
    }
  }

  .skill-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #2d3748;
    text-align: center;
    transition: all 0.3s ease;
    letter-spacing: 0.2px;
  }
  
  @media (max-width: 480px) {
    padding: 16px 8px;
    
    .skill-icon {
      width: 50px;
      height: 50px;
    }
    
    .skill-name {
      font-size: 0.8rem;
    }
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  justify-items: center;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 30px 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 5px;
  }
`

export const ProjetCardStyle = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 580px;
  height: auto;
  width: 420px;
  background: #F8F9FA;
  margin: 25px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(35, 217, 151, 0.15);
  border: 1px solid rgba(35, 217, 151, 0.2);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-8px) perspective(1000px);
    box-shadow: 0 30px 60px rgba(35, 217, 151, 0.25);
  }

  .project-image-container {
    width: 100%;
    height: 240px;
    overflow: hidden;
    border-radius: 24px 24px 0 0;
    position: relative;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  .project-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1b1b1b;
    margin: 0 0 12px 0;
    line-height: 1.3;
  }

  p {
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 16px 0;
    flex-grow: 1;
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 12px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .Tech {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
    margin-bottom: 20px;
    
    h3 {
      font-size: 0.85rem;
      font-weight: 600;
      margin: 0;
      color: #F8F9FA;
      background: linear-gradient(135deg, #23d997 0%, #1ea776 100%);
      padding: 8px 14px;
      border-radius: 20px;
      border: none;
      box-shadow: 0 2px 8px rgba(35, 217, 151, 0.3);
      transition: all 0.2s ease;
      text-transform: none;
      letter-spacing: 0.2px;
      
      &:hover {
        background: linear-gradient(135deg, #1ea776 0%, #23d997 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(35, 217, 151, 0.4);
      }
    }
  }

  .MyWorkbot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
    margin-top: auto;
    
    button {
      flex: 1;
      height: 48px;
      background: linear-gradient(135deg, #23d997 0%, #1ea776 100%);
      font-weight: 600;
      font-size: 0.95rem;
      padding: 0 1.5rem;
      border: none;
      border-radius: 12px;
      color: #F8F9FA;
      transition: all 0.3s ease;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
      }
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(35, 217, 151, 0.4);
        
        &::before {
          left: 100%;
        }
      }
      
      &:active {
        transform: translateY(0);
      }
      
      @media (max-width: 670px) {
        font-size: 0.9rem;
        height: 44px;
      }
    }
    
    #left {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      
      &:hover {
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
      }
    }
    
    #right {
      background: linear-gradient(135deg, #1b1b1b 0%, #4a5568 100%);
      
      &:hover {
        box-shadow: 0 8px 25px rgba(27, 27, 27, 0.4);
      }
    }
  }

  @media (max-width: 670px) {
    min-height: 520px;
    height: auto;
    width: 340px;
    margin: 20px;
    
    .project-content {
      padding: 20px;
    }
    
    h2 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    width: 300px;
    min-height: 480px;
    height: auto;
    
    .project-image-container {
      height: 200px;
    }
    
    .project-content {
      padding: 16px;
    }
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


