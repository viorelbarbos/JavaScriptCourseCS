import {useState} from "react"
import AddCodForm from "./add_color_code";

// Exercitiu incomplet !!

const  Exercitiul3 = () => {
    const [cod, setCod] = useState([
        {id: 0, cod: "white"},
    ]);

    const addCod = (cod1) => {
        const newCod = [...cod];
        newCod.push(cod1);
        setCod(newCod);
    }
 
    return (
        <div className="exercitiu" >
            <p className = "center">Exercitiul 3</p>
            <div className = "center" > 
                <AddCodForm  handleClick={addCod} />
            </div>
        </div>
        );
};

export default Exercitiul3;