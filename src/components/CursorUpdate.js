import GlobalStyle from "../GlobalStyle";

export default function cursorUpdate (page) {
    const mouseCursor = document.querySelector("#cursor");
    const navLinks = document.querySelectorAll(".navLink");
    let typeOfCursor = '';
    let typeOfNavLink = '';
    let typeOfclick = '';
    if (page === 'HubControl') {
        console.log('hi im here in hub control');
        if (mouseCursor.classList.contains('PagesCursor')) {
            mouseCursor.classList.remove('PagesCursor');
        }
        typeOfCursor = 'link-grow';
        typeOfNavLink = 'hovered-link';
        typeOfclick = 'link-click';
    }else if (page === 'AboutMe' || page === 'MySkills' || page === 'MyWork'|| page === 'Attributions') {
        mouseCursor.classList.add('PagesCursor');
        console.log('hi im here in if if');
        typeOfCursor = 'CubeNavLink-grow';
        typeOfclick = 'CubeNavlink-click';
        typeOfNavLink = 'hovered-link';
    }

    navLinks.forEach((navLink) => {
        navLink.addEventListener("mouseover", () => {
            mouseCursor.classList.add(typeOfCursor);
            navLink.classList.add(typeOfNavLink);
        });
        navLink.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove(typeOfCursor);
            navLink.classList.remove(typeOfNavLink);
        });
        navLink.addEventListener("click", () => {
            mouseCursor.classList.add(typeOfclick);
            mouseCursor.classList.remove(typeOfCursor);
            navLink.classList.add(typeOfNavLink);
            setTimeout(()=>{
                mouseCursor.classList.remove(typeOfclick);
                const responsive = window.innerWidth;
                if (responsive < 670) {
                    mouseCursor.classList.border = 'initial'
                }
            }, 3000);
        });
    });
}
