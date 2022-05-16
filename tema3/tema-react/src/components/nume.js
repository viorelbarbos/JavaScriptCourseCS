import {useState} from "react";

const Nume1 = (props) => {
  const [style, setStyle] = useState("");

    const changeStyle = () => {
      if ( style === "")
      setStyle("culoare");
    
      else {
        setStyle("")
      }
    }

    return (
      <div>
        <div className={style} style={{cursor:'pointer'}} onClick={changeStyle}>{props.username} </div>
      </div>
    );
  };

export default Nume1;

