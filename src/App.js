import React from 'react'
import TodoItem from './todoItem'
import TodoData from './todoData'
import Add from './Add'
// new code


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      Todo : TodoData ,
      id: 0 ,
      text: '',
      completed: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleNewChange = this.handleNewChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(id) {
        this.setState(prevState =>{
            const updatedTodos = prevState.Todo.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
              Todo: updatedTodos
            }
        })
        console.log(this.state.Todo)
    }
  
  handleNewChange(event){
    this.setState({
      id: this.state.Todo.length + 1 ,
      text: event.target.value ,
      completed: false //just remain myself
    })
    console.log("newchangerunning")
    console.log("new text become:" , this.state.text)
    console.log("the length is:",this.state.Todo.length)
    console.log("new id:",this.state.id)
  }

  handleSubmit(event){
    event.preventDefault()
      const newdata = {
        id : this.state.id,
        text : this.state.text,
        completed: false
      } 
      this.setState({
        Todo:[...this.state.Todo,newdata]
        //users: [...this.state.users, member]
      })
 
    console.log("submitrunning")
    console.log(newdata)
    console.log("todo becomes:",this.state.Todo)
  }

  render(){
    const todolist = this.state.Todo.map(item => 
    <TodoItem 
      key={item.id} 
      item={item} 
      handleChange={this.handleChange}/> )
    return(
      <div>
        <Add 
        handleNewChange={this.handleNewChange}
        handleSubmit={this.handleSubmit}
        />
        {todolist}
      </div>
    )
  }

}

export default App
