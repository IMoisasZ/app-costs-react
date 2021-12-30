import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project';

import Container from './components/layout/Container'

function App() {
  return (
      <Router>
        <NavBar />
          <Container customClass='min-height'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/empresa' element={<Company />} />
              <Route path='/contato' element={<Contact />} />
              <Route path='/newproject' element={<NewProject />} />
              <Route path='/project/:id' element={<Project />} />
            </Routes>
          </Container>
        <Footer />
      </Router>
  );
}

export default App;
