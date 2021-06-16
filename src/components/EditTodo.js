import React, {useState} from 'react'
import TodoForm from './TodoForm'

function EditTodo() {

    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [time, setTime] = useState()


    const projects = [
        {id : 1, name : "personal", numOfTodos : 0},
        {id : 2, name : "work", numOfTodos : 1},
        {id : 3, name : "other", numOfTodos : 2},
    ]

    function handleSubmit(e) {
        
    }

    return (
        <div className='EditTodo'>
            <div className="header">
                Edit todo
            </div>
            <div className="container">
                <TodoForm handleSubmit={handleSubmit}  text={text} setText={setText} day={day} setDay={setDay} time={time} setTime={setTime} projects={projects} />
            </div>
        </div>
    )
}

export default EditTodo 