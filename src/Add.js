import React from 'react'


function Add(props){
    return(
        <form onSubmit = {props.handleSubmit}>
            <input 
                type = "text" 
                name = "text"
                placeholder = 'what are u going to do'
                value = {props.text}////////
                onChange = {props.handleNewChange}
            ></input>
            <button>Submit</button>
        </form>
    )
}

  export default Add