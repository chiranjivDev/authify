import { Header, Footer } from "./components/index.js";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {LoginScreen, RegisterScreen} from './screens/index'


const App = () => {
  return (
    <>
      <BrowserRouter>
    <Header/>
    <main className='py-3'>
      <Container>
        <Routes>
          <Route path='/' element={<LoginScreen/>} exact/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
        </Routes>
      </Container>
    </main>
    <Footer/>
  </BrowserRouter>
    </>
  );
};

export default App;
