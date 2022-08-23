import './App.css';

import NavBar from './components/NavBar';
import './style.css';
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
    <div>
    <div>
    <NavBar/>
    </div>
    <ItemListContainer greeting='Buen día'/>
    </div>
  );
}

export default App;
