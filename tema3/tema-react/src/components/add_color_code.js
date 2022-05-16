import { useState } from "react";

// Exercitiu incomplet !!

const AddCodForm = (props) => {
  const [cod, setCod] = useState("#000000");
  const handleClick = () => {
    props.handleClick({ cod });
  };
  const updateCod = (event) => {
    setCod(event.target.value);
  };

  return (
    <>
      <input
        type="color"
        value={cod}
        onChange
        {...(e) => setCod(e.target.value)}
      ></input>
      <button>Add</button>
    </>
  );
};

export default AddCodForm;
