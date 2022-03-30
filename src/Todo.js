import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToDo, removeOne, clearToDo } from './features/ToDoSlice'

function ToDo() {
    const items = useSelector((state) => state.ToDos.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
console.log(items)

    const renderItems =  items.map((item, index) => <li key={index} onClick={() => dispatch(removeOne(index))}>{item}</li>) 

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addToDo(input))
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearToDo())}>Clear</button>
        </div>
    )
}

export default ToDo