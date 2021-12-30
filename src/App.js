import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home';
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Container customClass='min-height'>
            <Route exact path="/"><Home /></Route>
            <Route path='/projects'><Projects /></Route>
            <Route path='/empresa'><Company /></Route>
            <Route path='/contato'><Contact /></Route>
            <Route path='/newproject'><NewProject /></Route>
          </Container>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
