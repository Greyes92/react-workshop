import React from 'react'
import BackButton from './components/BackButton'
import Header from './components/Header'
import Loading from './components/Loading'
import SingleTodo from './components/SingleTodo'
import TodoItem from './components/TodoItem'
import Todos from './components/Todos'
import UserInfo from './components/UserInfo'
import WelcomePage from './components/WelcomePage'

class App extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
      users: null,
      user: null,
      todos: null,
      singleTodo: null,
      loading: true,
      loadingMessage: 'App is loading...'
    }
  }
  
//   componentDidMount() {

//     if (this.props.singleTodo.userId) {
//         fetch(`https://jsonplaceholder.typicode.com/users/${this.props.singleTodo.userId}`)
//             .then((res) => res.json())
//             .then((data) => this.setState({ userInfo: data }))
//     }
// }

componentDidMount() {
      fetch(`https://jsonplaceholder.typicode.com/users/`)
          .then((res) => res.json())
          .then((data) => this.setState({ users: data, loading:false }))
}          

  

  // componentDidMount() {
  //   if(this.state.user) {
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //   .then((response) => response.json())
  //   .then((data) => this.setState({todos: data, loading: false}))
  //   }
  // }



  render() {

    

    const setTodos = (e) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id}/todos`)
        .then((response) => response.json())
        .then((data) => this.setState({ todos: data, loading: false}))

        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id}`)
        .then((response) => response.json())
        .then((data) => this.setState({ user:data, loading: false}))
    }

    console.log(this.state.todos)
  
    const setSingleTodo = (e) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({singleTodo: data}))
    }

    const clearSingleTodo = () => {
      this.setState({singleTodo: null})
    }

    if(this.state.loading) {
      return (
        <Loading loadingMessage={this.state.loadingMessage}/>
      )
    }

    return (

      !this.state.user ?  (
        <WelcomePage currentState={this.state} setTodos={setTodos}/>
      ) : (
    
      !this.state.singleTodo ? (
        <>
        <Header currentState={this.state} currentUser={this.state.user}/>
        <Todos todos={this.state.todos} setSingleTodo={setSingleTodo} />
        </> 
    ) : (
        <>
        <SingleTodo singleTodo={this.state.singleTodo} />
        {/* // <SingleTodo singleTodo={this.state.singleTodo clearSingleTodo={clearSingleTodo}}/> */}
        <BackButton clearSingleTodo={clearSingleTodo} />
        </>
      )
      )
    )
  }
}

export default App;
