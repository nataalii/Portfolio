import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar/NavBar';
import { Contact, Home, Projects, Skills } from './pages';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <ToastContainer />
    </>
  );
}

export default App;
