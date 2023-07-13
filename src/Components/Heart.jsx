import "../Styles/Heart.css";
import {FaHeart} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa";
import { useState } from "react";

const Heart = () => {

  const [liked, seTliked] = useState(false);

  const handleClick = () => {
    liked == true ? seTliked(false) : seTliked(true);
  } 

  return (
    <div onClick={handleClick}>
      {liked == true ? <FaHeart className="heart"/> : <FaRegHeart className="heart"/>}
    </div>
  )
}

export {Heart}
