export const HubControlPageAnimation = {
    hidden : {
        opacity: 0
    },
    show : {
        opacity: 1
    },
    exit : {
        //y: -1000,
        scale:0,
        transition: {
            duration: 0.7
        }
    }
}


export const LogoAnimation = {
    hidden : {
        opacity: 0,
        visibility: 'hidden',
        y: -100
    },
    show : {
        opacity: 1,
        visibility: 'visible',
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.5
        }
    }
}


export const MiddleAnimation =  {
    hidden : {
        opacity: 0,
        visibility: 'hidden',
        scale: 0.5
    },
    show : {
        opacity: 1,
        scale: 1,
        visibility: 'visible',
        transition : {
            duration:0.8,
            type: 'spring',
            bounce: 0.8,


        }
    },
    hoverIn: {
        scale: 1.1,
        transition: {
            duration: 0.5
        }
    },
    hoverOut: {
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}

export const HoverMiddleAnimation =  {
    hidden : {
        opacity: 0,
        visibility: 'hidden',
    },
    show : {
        opacity: 1,
        visibility: 'visible',
    },
}

export const ClickAnimation = {
    hidden : {
        opacity: 0,
        y: -200,
        visibility: 'hidden',
    },
    show : {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        color: '#1b1b1b',
        transition: {
            duration: 2,
            delay: 1
        }
    },
    hoverIn: {
        color: '#F8F9FA',
        transition: {
            duration: 0.3
        }
    },
    hoverOut: {
        color: '#1b1b1b',
        transition: {
            duration: 0.3
        }
    },
}

export const BottomNavAnimation =  {
    hidden : {
        opacity: 0,
        visibility: 'hidden',
        y: 200
    },
    show : {
        opacity: 1,
        visibility: 'visible',
        y: 0,
        transition : {
            duration:1,
            delay: 0.6
        }
    },
}

export const HorizontalLeftNavAnimation =  {
    hidden : {
        opacity: 0,
        x: -200,
        visibility: 'hidden',
    },
    show : {
        opacity: 1,
        visibility: 'visible',
        x: 0,
        transition : {
            duration:1,
            delay: 0.6
        }
    },
}

export const HorizontalRightNavAnimation =  {
    hidden : {
        opacity: 0,
        x: 200,
        visibility: 'hidden',
    },
    rotation : {
        rotate: '180deg'
    },
    show : {
        opacity: 1,
        visibility: 'visible',
        x: 0,
        transition : {
            duration:1,
            delay: 0.6
        }
    },
}

export const SocialBarAnimation =  {
    hidden : {
        width: '3px',
        height: '0px',
        opacity: 0,
        visibility: 'hidden',
    },
    show : {
        opacity: 1,
        visibility: 'visible',
        height: '20vh',
        transition : {
            duration: 1,
            delay: 1.2
        }
    },
}

export const LinkedInSocialIconsAnimation =  {
    hidden : {
        y: 200
    },
    show : {
        y: 0,
        transition : {
            duration: 0.7,
            delay: 1.8
        }
    },
    hoverIn : {
        scale: 1.1,
        x: '20px',
        transition: {
            duration: 0.3
        }
    },
    hoverOut: {
        scale: 1,
        x: 0,
        transition: {
            duration: 0.3
        }
    }
}

export const GithHubSocialIconsAnimation =  {
    hidden : {
        y: 200
    },
    show : {
        y: 0,
        transition : {
            duration: 0.7,
            delay: 1.7
        }
    },
    hoverIn : {
        scale: 1.1,
        x: '20px',
        transition: {
            duration: 0.3
        }
    },
    hoverOut: {
        scale: 1,
        x: 0,
        transition: {
            duration: 0.3
        }
    }
}

export const InstagramSocialIconsAnimation =  {
    hidden : {
        y: 200
    },
    show : {
        y: 0,
        transition : {
            duration: 0.7,
            delay: 1.6
        }
    },
    hoverIn : {
        scale: 1.1,
        x: '20px',
        transition: {
            duration: 0.3
        }
    },
    hoverOut: {
        scale: 1,
        x: 0,
        transition: {
            duration: 0.3
        }
    }
}

export const FacebookSocialIconsAnimation =  {
    hidden : {
        y: 200
    },
    show : {
        y: 0,
        transition : {
            duration: 0.7,
            delay: 1.5
        }
    },
    hoverIn : {
        scale: 1.1,
        x: '20px',
        transition: {
            duration: 0.3
        }
    },
    hoverOut: {
        scale: 1,
        x: 0,
        transition: {
            duration: 0.3
        }
    }
}

export const test =  {
    hidden : {
        opacity:0
    },
    show : {
        opacity:1,
    },
    hoverIn : {
        scale: 4,
        background: '#1b1b1b',
        origin: '50% 50%',
        border: '2px solid #23d997',
        transition: {
            duration: 0.3
        }
    },
    hoverOut: {
        scale: 1,
        border: '2px solid #1b1b1b',
        transition: {
            duration: 0.3
        }
    }
}


//AboutMe

export const AboutMeAnimation = {
    hidden : {
        opacity: 0
    },
    show : {
        opacity: 1,
        background: '#1b1b1b',
        transition: {
            delay: 1
        }
    },
}

export const DescriptionAnimation = {
    hidden : {
        scale: 1.5,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1
    },
    responsiveShow : {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 2.5
        },
    },
    exit : {
        scale: 1.5,
        opacity: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        }
    }
}


export const TitleAnimation = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 2.5
        },
    },
    exit : {
        y: 200,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        }
    }
};

export const Fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 2.5
        },
    },
    exit : {
        opacity: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        }
    }
};

export const ButtonAnimation = {
    hidden: {
        y: -200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        },
    },
    exit : {
        y: 200,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        }
    }
}

export const ImgAnimation = {
    hidden: {
        scale: 1.5,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 2.5
        },
    },
    exit : {
        scale: 1.5,
        opacity: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        }
    }
};

export const WaveSVGAnimation = {
    hidden : {
        pathLength: 0, //longeur de 0
        pathOffset: 1 //le chemin 0 intial 1 final
        //dans ce cas la wave va de doite a gauche du coup on
        //invese les offset pour aller de gauche a droite
    },
    show : {
        pathLength: 1, //longeur de 1
        pathOffset: 0,
        transition: {
            duration: 1,
            delay: 1.5
        }
    },
    exit : {
        pathLength: 0,
        transition: {
            duration: 1,
            delay: 0.5
        }
    }
}

//MySkills Animation

export const MySkillsTitleH2Animation = {
    hidden: {
        y: -200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 1
        },
    },
    exit : {
        y: -200,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 1
        },
    }
}


export const MySkillsCardAnimation = {
    hidden : {
        scale: 0,
        visibility: 'hidden',
    },
    show : {
        scale: 1,
        visibility: 'visible',
        transition: {
            duration: 0.75,
            delay: 2.7
        }
    },
    exit : {
        scale: 0,
        transition: {
            duration: 0.5,
        }
    },
    hoverIn: {
        color: '#F8F9FA',
        transition: {
            duration: 0.3
        }
    },
    hoverOut: {
        color: '#1b1b1b',
        transition: {
            duration: 0.3
        }
    },
}


export const VerticalLineAnimation = {
    hidden : {
        width: '2px',
        height: '0',
        opacity: 0,
        visibility: 'hidden',
    },
    show : {
        opacity: 1,
        visibility: 'visible',
        height: '85vh',
        transition : {
            duration: 0.75,
            delay: 1.8
        }
    },
    exit : {
        width: '2px',
        height: '0',
        transition : {
            duration: 0.5,
            delay: 0.5
        }
    }
}

//My Work Page

export const MyWorksTitleH2Animation = {
    hidden: {
        y: -200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 1
        },
    },
    exit : {
        y: -200,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 0.75
        },
    }
}

export const ProjetCardContainerAnimation = {
    hidden: {
        opacity: 0,
        visibility: 'hidden',
    },
    show: {
        opacity: 1,
        visibility: 'visible',
        transition: {
            staggerChildren: 0.5,
            delayChildren: 1.75
        }
    },
}

export const MyWorkCardAnimation = {
    hidden: {
        scale: 0,
        visibility: 'hidden',
    },
    show: {
        scale: 1,
        visibility: 'visible',
        transition: {
            duration: 1
        }
    },
}

//CubeNav
export const CubeNavAnimation =  {
    hidden : {
        opacity: 0,
        visibility: 'hidden',
        scale: 0.5
    },
    show : {
        opacity: 1,
        scale: 1,
        visibility: 'visible',
        transition : {
            duration:0.8,
            type: 'spring',
            bounce: 0.8,


        }
    },
    hoverIn: {
        scale: 0.9,
        transition: {
            duration: 0.5
        }
    },
    hoverOut: {
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    exit : {
        opacity: 0,
        x: -200,
        transition: {
            duration: 0.5
        }
    }
}

export const HoverCubeNavAnimation =  {
    hidden : {
        opacity: 0,
        visibility: 'hidden',
    },
    show : {
        opacity: 1,
        visibility: 'visible',
    },
    exit : {
        opacity: 1,
        transition: {
            delay: 2
        }
    }
}

//Attributions Page

export const  AttributionsH2Animation = {
    hidden: {
        y: -200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: 2
        },
    },
    exit : {
        y: -200,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        },
    }
}

export const AttributionsAnimation = {
    hidden : {
        width: '100%'
    },
    show : {
        width: '80%',
        transition: {
            duration: 1,
            delay: 1.5
        }
    },
    exit : {
        width: '100%',
        transition: {
            duration: 0.5
        }
    }
}


export const AttributionAnimation = {
    hidden : {
        opacity: 0,
        scale : 0,
        visibility: 'hidden',
    },
    show : {
        opacity: 1,
        scale: 1,
        visibility: 'visible',
        transition: {
            duration: 0.5,
            delay: 2.5
        }
    },
    exit : {
        opacity: 0,
        scale : 0,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
}
