import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      cursor: none;
    }
    
    body {
      background: #F8F9FA;
      font-family: 'Inter', sans-serif;
      color: #1b1b1b;
      overflow: hidden;
      }
    
    h1 {
      font-family: 'Lobster', cursive;
      font-size: 4rem;
      color: #1b1b1b;
      @media (max-width: 670px) {
        font-size: 2.2rem;
      }
    }
    
    h2 {
      font-size: 3rem;
    }

    span {
      font-weight: bold;
      font-size: 4rem;
      color: #F8F9FA;
      @media (max-width: 670px) {
        font-size: 2.4rem;
      }
    }
    
    a {
      text-decoration: none;
      color: #1b1b1b;
      padding: 1rem;
    }
    
    a:visited {
      text-decoration: none;
      color: #1b1b1b;
    }
    
    p {
      color: #F8F9FA;
    }
    
    
    .link-grow {
      display: block;
      transform: scale(4);
      background: #1b1b1b;
      border: 2px solid #23d997;
    }
    .CubeNavLink-grow {
      display: block;
      transform: scale(4);
      background: #F8F9FA;
      border: 2px solid #23d997;
    }
    
    
    .link-click {
      border: 2px solid #23d997;
      animation-name: click;
      animation-duration: 2.5s;
      animation-timing-function: ease-in-out;
    }
    @keyframes click {
      0%{
        opacity: 1;
        background: #1b1b1b;
      }
      50% {
        opacity: 1;
        transform: scale(100);
        background: #1b1b1b;
      }
      90% {
        opacity: 1;
        transform: scale(1);
        background: #1b1b1b;
      }
      100% {
        opacity: 0;
        background: transparent;
      }
    }
    
    .CubeNavlink-click {
      border: 2px solid #23d997;
      animation-name: CubeNavclick;
      animation-duration: 2s;
      animation-delay: 1s;
      animation-timing-function: ease-in-out;
    }
    @keyframes CubeNavclick {
      0%{
        opacity: 1;
        background: #F8F9FA;
      }
      50% {
        opacity: 1;
        transform: scale(100);
        background: #F8F9FA;
      }
      90% {
        opacity: 1;
        transform: scale(1);
        background: #F8F9FA;
      }
      100% {
        opacity: 0;
        background: transparent;
      }
    }
    
    .linkedin-grow {
      display: block;
      transform: scale(2);
      background: #226cc2;
      border: 2px solid #226cc2;
      transform-origin: 100% 100%;
    }
    
    .github-grow {
      transform: scale(2);
      background: #7b268e;
      border: 2px solid #7b268e;
      transform-origin: 100% 100%;
    }

    .facebook-grow {
      transform: scale(2);
      background: #1877f2;
      border: 2px solid #1877f2;
      transform-origin: 100% 100%;
    }
    
    .instagram-grow {
      transform: scale(2);
      background: rgb(162,61,231);
      background: linear-gradient(90deg, rgba(162,61,231,1) 0%, rgba(255,50,50,1) 50%, rgba(254,179,73,1) 100%);
      border: 2px;
      transform-origin: 100% 100%;
    }

    .PagesCursor {
      border: 2px solid #23d997;
    }
    
    .clickCss {
      overflow: hidden;
      position: relative;
      bottom: 135px;
      width: 120px;
      @media (max-width: 670px) {
        bottom: 80px;
        width: 90px;
      }
    }

    #cursor {
      color: #1b1b1b;
    }

    html {
      @media (max-width: 670px) {
        font-size: 70%;
      }
    }
`

export default GlobalStyle;