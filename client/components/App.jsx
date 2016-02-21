import React from 'react';
import Main from './Main/Main.jsx';
import Login from './Auth/Login.jsx';
import AuthContainer from '../containers/AuthContainer.jsx';


const App = ({user, getUser}) => {
  if(!user) {
    getUser();
    return (<AuthContainer />);
  } else {
    return (<Main user= {user} />);
  }


}


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.getUser();
//   }


//   render() {
//     if (!this.props.user){
//       return (
//         <Login/>
//       )
//     } else {
//       return (
//         <Main user={this.props.user}/>
//       )
//     }
//   }
// }

export default App;