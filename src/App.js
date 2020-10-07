import React, {Component} from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Navbar from './Navbar';
import SignUp from './SignUp'
import LogIn from './LogIn'
import UserProjectShowPage from './UserProjectShowPage'
import './App.css';
import UserProfile from './UserProfile';

class App extends Component {

  render() {

    return (

      <div>
           <Header />
           <Homepage />
           <Navbar />
           <SignUp />
           <LogIn />
           <UserProjectShowPage />
           <UserProfile />
     
      </div>
    );
  }
}

export default App;
