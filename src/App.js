import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './componets/pages/Home';
import Company from './componets/pages/Company';
import Contact from './componets/pages/Contact';
import NewProject from './componets/pages/NewProject';
import Projects from './componets/pages/Projects';

import Container from './componets/layout/Container';
import Navbar from './componets/layout/Navbar';
import Footer from './componets/layout/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/newproject">
          <NewProject />
        </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
