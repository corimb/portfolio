import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import './App.css';

import Bio from './views/Bio'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab);
library.add(fas);


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/"><FontAwesomeIcon className="home-icon" icon={['fas', 'home']} ></FontAwesomeIcon></Link>
        <nav className="menu">
            <ul>
              <li><Link to="/">Bio</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
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
        <nav className="social-media">
            <ul>
              <li><a href="https://www.linkedin.com/in/corina-mihaela-borcoci/"><FontAwesomeIcon icon={['fab', 'linkedin']} size='lg'></FontAwesomeIcon></a></li>
              <li><a href="https://github.com/corimb"><FontAwesomeIcon icon={['fab', 'github']} size='lg'></FontAwesomeIcon></a></li>
            </ul>
        </nav>
      </footer>
    </div>
    </Router>
  );
}

export default App;
