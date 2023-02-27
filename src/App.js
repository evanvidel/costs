import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './componets/pages/Home';
import Company from './componets/pages/Company';
import Contact from './componets/pages/Contact';
import NewProject from './componets/pages/NewProject';
import Container from './componets/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>
      <Switch>
        <Container customClass="min-height">
        <Route exact path="/">
          <Home />
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
      <p>Footer</p>
    </Router>
  );
}

export default App;
