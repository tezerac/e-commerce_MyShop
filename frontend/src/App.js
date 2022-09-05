import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 
'react-router-dom'
import Footer from "./component/Footer";
import Header from "./component/Header";
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
const App = () => {
  return (
   <>
   <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />}  />
              <Route path='/product/:_id' element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
   </>
  );
}

export default App;
