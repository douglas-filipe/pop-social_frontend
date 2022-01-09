import { Container } from "./styles";
//import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { Reactions } from "../reactions";
import { useCallback, useState } from "react";
import { useLongPress, LongPressDetectEvents } from "use-long-press";
import { IPosts } from "../../types/Posts";

interface Iprops {
  imgUrl: string;
  author: string;
  description: string;
}

export const Card = ({ imgUrl, author, description }: Iprops) => {
  const enabled = true;
  const callback = useCallback(() => {}, []);
  const bind = useLongPress(enabled ? callback : null, {
    onStart: () => console.log("Press started"),
    onFinish: () => {
      console.log("Long press finished");
      //setVisible(false);
    },
    onCancel: () => console.log("Press cancelled"),
    //onMove: () => console.log("Detected mouse or touch movement"),
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: false,
    detect: LongPressDetectEvents.BOTH,
  });

  return (
    <Container>
      <div className="Image">
        <h1>Enviado por {author}</h1>
        <p>{description ? description : ""}</p>
        <img src={imgUrl} alt="Teste" />
      </div>
      <div className="Reaction" onClick={() => console.log("clikou")}>
        <AiOutlineLike />
        <span>Curtir</span>
      </div>
    </Container>
  );
};

/**
 * 
 * <div onMouseLeave={() => setVisible(false)} className="CardEmoticons">
        <Reactions visible={visible} />
      </div>
 * 
 */
