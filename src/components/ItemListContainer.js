import ItemCount from './ItemCount' 


const ItemListContainer = ({greeting}) => (
    <div>
    <div>
        <h2>{greeting}</h2>
    </div>
    <ItemCount stock={6} initial={1} cantidadAgregada={2}/>
    </div>
)
  
  export default ItemListContainer;