import React, { useEffect } from "react";
import { EnterAnimationStyle } from "./Style";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function EnterAnimation(props) {
  const next = useSelector((state) => state.enterAnimation);
  const nav = useNavigate();
  useEffect(() => {
    const goTo = () => {
      nav("/");
    };
    if (next === true) {
      goTo();
    }
  }, [next, nav]);

  const dispatch = useDispatch();

  const nextFunction = () => {
    dispatch({
      type: "next", //nom de l'action
    });
  };

  return (
    <EnterAnimationStyle id="next">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2000)
            .typeString(
              '<h1 style="display: inline">Code is an </h1><span style="background: #1b1b1b;border-radius: 15%;padding: 5px">Art !</span>'
            )
            .pauseFor(3000)
            .deleteAll(10)
            .callFunction(nextFunction)
            .callFunction((state) => {
              // turn off animation
              state.elements.cursor.style.animation = "none";
              // hide cursor
              state.elements.cursor.style.display = "none";
            })
            .callFunction(() => {
              const EnterAnimationSelector = document.querySelector("#next");
              EnterAnimationSelector.remove();
            })
            .start();
        }}
        options={{
          cursor: '<h1 id="cursor" style="display: inline">_</h1>',
          delay: 70,
        }}
      />
    </EnterAnimationStyle>
  );
}

export default EnterAnimation;
