
import './App.css'
import Footer from './layout/Footer';
import Header from './layout/Header';
import PageContent from './layout/PageContent';

function App() {

  return (
    <div className='flex flex-row '>
      <Header/>
      <PageContent/>
      <Footer/>
    </div>
  )
}

export default App;
