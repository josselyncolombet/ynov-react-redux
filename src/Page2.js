import {useState} from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function App(props) {

 

  return (
   <>

   <h1>Page2</h1>
   <h1>{props.counter.value}</h1>
    <Link to="/">Home</Link>
   </>
  );
}
const mapStateToProps = state => ({
  counter: state.counterReducer
})

export default connect(mapStateToProps, null)(App)
