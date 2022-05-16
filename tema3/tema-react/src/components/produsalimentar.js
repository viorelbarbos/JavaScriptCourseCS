import PropTypes from "prop-types"

const Produs = (props) => {
  return (
    <div>
      <div>Denumire: {props.denumire} </div>
      <div>Pret: {props.pret} </div>
      <div style = {{color: props.culoare}} >Categorie: {props.categorie}</div>
    </div>
  );
};

export default Produs;


Produs.prototype = {
    denumire: PropTypes.string,
    pret: PropTypes.string,
    categorie: PropTypes.string,
    culoare: PropTypes.string,
}

Produs.defaultProps = {
    denumire: "Denumire inexistenta",
    pret: "Pret inexistent",
    categorie: "Categorie inexistenta",
    culoare: "BLUE"
}