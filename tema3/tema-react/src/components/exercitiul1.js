import Produs from "./produsalimentar";

const Exercitiul1 = () => {
  return (
    <div className="exercitiu">
      <p className = "center">Exercitiul 1</p>
      <div className="produs">
            <div className = "padd">
                <Produs denumire="BELVITA CHOCOLATE " pret="10 Lei " categorie="Biscuiti " culoare = "RED"/>
            </div>
            <div className = "padd">
                <Produs denumire="BELVITA CHOCOLATE " pret="10 Lei " categorie="Biscuiti "/>
            </div>
            <div className = "padd">
                <Produs />
            </div>
      </div>
    </div>
  );
};

export default Exercitiul1;
