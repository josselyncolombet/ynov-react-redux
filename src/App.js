import {useState} from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as fromCounterActions from './actions/counter'
import * as fromTodosActions from './actions/todos'

function App(props) {

 

  return (
   <>

   <h1>TODOS</h1>
    <button onClick={() => props.getTodos()}>GET TODOS</button>
    
   </>
  );
}

const mapStateToProps = state => ({
  counter: state.counterReducer,
  todos: state.todoReducer
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(fromCounterActions.increment()),
  decrement: () => dispatch(fromCounterActions.decrement()),
  getTodos: () => dispatch(fromTodosActions.getTodo())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
