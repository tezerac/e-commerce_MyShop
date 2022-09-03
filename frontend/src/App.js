import {Container} from 'react-bootstrap';
import Footer from "./component/Footer";
import Header from "./component/Header";
import React from 'react';
import HomeScreen from './screens/HomeScreen';
const App = () => {
  return (
   <>
   <Header/>
     <main> 
      <Container>    
       <HomeScreen/> 
      </Container>   
     </main>        
   <Footer/>
   </>
  );
}

export default App;
