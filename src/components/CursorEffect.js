import React, { useEffect } from "react";
import { CursorEffectStyle } from "./Style";


function CursorEffect(props) {




  useEffect(() => {
    const mouseCursor = document.querySelector("#cursor");
    const cursor = (e) => {
      mouseCursor.style.top = e.y + "px";
      mouseCursor.style.left = e.x + "px";
    };

    window.addEventListener("mousemove", cursor);

  }, []);

  return <CursorEffectStyle id="cursor"></CursorEffectStyle>
}

export default CursorEffect;

