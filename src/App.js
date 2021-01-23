import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './App.css';

import Bio from './views/Bio'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    
        return (
          <Router>
          <div className="App">
            <header className="App-header" id="js-header">
              <Header/>
            </header>
            <section className="content">
            <Switch>
                <Route exact path="/">
                  <Bio />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </section>
            <footer className="footer">
              <Footer/>
            </footer>
          </div>
          </Router>
        );
  }
export default App;
