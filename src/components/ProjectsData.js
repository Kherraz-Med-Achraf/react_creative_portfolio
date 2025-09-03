import Projet1FrontIMG from '../Assets/SpaceInvaderFrontIMG.PNG'
import Projet2FrontIMG from '../Assets/Blog-React.PNG'
import Projet3FrontIMG from '../Assets/WeatherApp.PNG'
import Projet4FrontIMG from '../Assets/Modern..PNG'
import Projet5FrontIMG from '../Assets/Spiso.PNG'



export const Projects = [
     {
        frontIMG: Projet1FrontIMG,
        title: 'React Space-Invader',
        description: 'Création d\'un jeu space invader en React\n' +
            'Utilisation de React Redux pour la gestion des States\n' +
            'Mise en place de React-Router pour le changement de page',
        techs:['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
        url: 'https://space-invader-react.kherraz-med-achraf.com',
        gitUrl: 'https://github.com/Kherraz-Med-Achraf/React-Space-Invaders'
    },
    {
        frontIMG: Projet2FrontIMG,
        title: 'Blog React',
        description: 'Réalisation d’un blog avec le Framework React\n' +
            'Utilisation de React Router et de Redux\n' +
            'Mise en place du middleware Redux Thunk pour faire un appel\n' +
            'API de manière asynchrone\n',
        techs:['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
        url: 'https://blog-react.kherraz-med-achraf.com',
        gitUrl: 'https://github.com/Kherraz-Med-Achraf/Blog-React'
    },
    {
        frontIMG: Projet3FrontIMG,
        title: 'Weather App JavaScript',
        description: 'Réalisation d\'une application météo faite en JavaScript\n' +
            'Appel API de OpenWeatherMap avec la méthode Fetch et la\n' +
            'méthode AJAX\n' +
            'Mise en place de la Géolocalisation et d\'un Night Mode',
        techs:['JavaScript', 'HTML', 'CSS'],
        url: 'https://weather-app-js.kherraz-med-achraf.com',
        gitUrl: 'https://github.com/Kherraz-Med-Achraf/Weather-app-JavaScript'
    },
    {
        frontIMG: Projet4FrontIMG,
        title: 'Site Modern.',
        description: 'Réalisation d’un site e-commerce avec WordPress Utilisant\n' +
            'principalement les plugins ELEMENTOR et WooCommerce',
        techs:['WordPress', 'HTML', 'CSS'],
        url: 'https://modern.kherraz-med-achraf.com/',
    },
    {
        frontIMG: Projet5FrontIMG,
        title: 'Spiso',
        description: 'Réalisation d’un site vitrine pour l\'entreprise SPISO\n' +
            'Familiarisation avec l’utilisation des fournisseurs\n' +
            'd\'hébergement web (OVH, O2switch, Hostinger)',
        techs:['WordPress', 'HTML', 'CSS'],
        url: 'https://mspiso.fr',
    },

]