import React from 'react';
import  './styles/App.css';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
     return (
        <div>
           <NavigationBar/>
        </div>
     );
  }
}

class NavigationBar extends React.Component {
   render() {
      return (
         <div>
           <Header />
            <div className="home">
              <a href="login.html"><button class="butt" id="butt1">Log In</button></a>
              <a href="Register.html"><button class="butt" id="butt2">Register</button></a>
            </div>
            <Footer />
         </div>
      );
   }
}
export default App;