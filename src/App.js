import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
                <nav>
                  <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="#">Job Portal</a>
                      <ul>
                        <li><a href="Login.html">Explore Jobs</a></li>
                        <li><a href="Login.html">Add Jobs</a></li>

                      </ul>
                    </li>
                    <li><a href="Map.html">Find Us</a></li>
                    <li><a href="about us.html" class="active">About Us</a>
                      <ul>
                        <li><a href="about%20us.html#aboutsec">Our Story</a></li>
                        <li><a href="about%20us.html#missionpa">Our Mission</a></li>
                        <li><a href="about%20us.html#wherewebac">Where We Work</a></li>
                      </ul>
                    </li>
                    <li><a href="contactUs.html">Contact Us</a></li>
                  </ul>
                </nav>
         </div>
      );
   }
}
export default App;