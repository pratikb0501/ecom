import './App.css';
import Header from './components/Header';
import ProductsList from './containers/ProductsList';
import MyCart from './containers/MyCart'
import { useSelector } from 'react-redux';

function App() {
  const currentPage = useSelector(state => state.allProducts.currentPage)
  return (
    <div className="App">
      <Header />
      {currentPage === "homepage" && (<ProductsList />)}
      {currentPage === "mycart" && (<MyCart />)}
    </div>
  );
}

export default App;
