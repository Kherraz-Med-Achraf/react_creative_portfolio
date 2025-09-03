const INITIAL_STATE = {  //On ecrit en majuscule et underScore par par convention
    enterAnimation: true //state initial
}

function AnimationReducer(state = INITIAL_STATE, action) {
//on utlise un switch case pour definir l'action qu'on veut faire sur notre state en fonction de ce que
//le reduser va recevoir du dispatch

    switch (action.type) {
        case 'next' : {
            return {
                ...state,  //on copie le state actuel
                enterAnimation: true

            }
        }

    }

    return state;
}

export default AnimationReducer;