
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Footer from './layout/Footer';
import Header from './layout/Header';
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {

  return (
    <div className='flex flex-col '>
      <Header/>
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;
