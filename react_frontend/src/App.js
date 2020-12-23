import { Container } from 'react-bootstrap';
import Header from './components/navbar/Header';
import HomeView from './views/HomeView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartView from './views/CartView';
import ProductView from './views/ProductView';
import Footer from './components/footer/Footer';

function App() {

  return (
    <Router>
      <Header/>
        <main>
          
        
        
        <Switch>
          <Route path='/' exact component={HomeView}/>
          <Route path='/cart' exact component={CartView}/>
          <Route path='/products/:id' exact component={ProductView}/>
        </Switch>

        
        </main>
     <Footer />
    </Router>
  );
}

export default App;
