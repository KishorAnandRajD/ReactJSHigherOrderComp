import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Header extends Component{

  authButton(){

  // If the state value passed as props to this file is False, then show button label as 'Sign Out', else 'Sign In'
  // For the button label toggle/flip value, call Action creator function "this.props.authenticate" in onClick event
    if(this.props.authenticatedprops){
      return <button onClick={()=>this.props.authenticate(false)}>Sign Out</button>
    }
    return <button onClick={()=>this.props.authenticate(true)}>Sign In </button>;
  }

  render(){
    return(
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
           <li className="nav-item">
              <Link to="/"> Home </Link>
           </li>
           <li className="nav-item">
              <Link to="/resources"> Resources </Link>
           </li>
           <li className="nav-item">
              {this.authButton()}
           </li>
        </ul>
      </nav>

    );
  }
}

function mapStateToProps(state){
  // Take value from the state 'authenticated' from combined reducer index.js file. This authenticatedprops will show up as props in the Header
  return {authenticatedprops:state.authenticated}
}

// mapStateToProps - this current file 'header.js' needs access to the state value as props and so this is used
// actions - this current file 'header.js' needs access to the functions from actions folder. Only then we can use 'authenticate()' function from index.js file in this file as 'this.props.authenticate()'
export default connect(mapStateToProps,actions)(Header);
