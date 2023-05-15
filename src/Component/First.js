import back from "../img/backFix.png";
import back1 from "../img/mobi-back.png";
import rect from "../img/rect.png";
import React, {useState, useEffect} from "react";

export const First = () => {
  const useWindowWide = (size) => {
    const [width, setWidth] = useState(0)
    
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth)
      }
      
      window.addEventListener("resize", handleResize)
      
      handleResize()
      
      return () => { 
        window.removeEventListener("resize", handleResize)
      }
    }, [setWidth])
    
    return width > size
  }


  const wide = useWindowWide(600)

  return (
    <div>
      <div>
        {
        !wide ? 
        <img src={back1} className="object-cover w-full h-full" style={{minHeight: '400px'}}></img>
        :
        <img src={back} className="object-cover h-[78vh] w-full overflow-hidden" ></img>
        }
      </div>
    </div>
  );
};
