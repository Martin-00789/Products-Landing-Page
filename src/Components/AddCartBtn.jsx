import "../Styles/AddCartBtn.css";

const AddCartBtn = ({name, newPrice}) => {
  return (
    <button onClick={()=> {alert(`Has comprado un ${name} en $${newPrice}`)}}>Comprar</button>
  )
}

export {AddCartBtn}
