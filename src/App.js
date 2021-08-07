import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import custom components
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Terminal from './pages/Terminal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NoMatch from './pages/NoMatch';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-typist/dist/Typist.css';
import './App.css';

function App(){
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path="/" component={Terminal} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/*" component={NoMatch} />
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
