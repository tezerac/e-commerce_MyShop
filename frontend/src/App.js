import {Container} from 'react-bootstrap';
import Footer from "./component/Footer";
import Header from "./component/Header";
import React from 'react';
const App = () => {
  return (
   <>
   <Header/>
     <main> 
      <Container>    
       <h1>Welcome to Tab Market</h1>   
      </Container>   
     </main>
   <Footer/>
   </>
  );
}

export default App;
