
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Footer from './layout/Footer';
import Header from './layout/Header';
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from './pages/ProductdetailPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <div className='flex flex-col '>
      <Header/>
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;
