/* eslint-disable no-undef */
import React, { useState } from 'react'

export default function Todos() {
    let data =
[
    {
        sno: 1,
        title: "Go to the market",
        desc: "You need to go to the market to get this job done"
    },
    {
        sno: 2,
        title: "Go to the mall",
        desc: "You need to go to the mall to get this job done"
    },
    {
        sno: 3,
        title: "Go to the hill",
        desc: "You need to go to the hill to get this job done"
    }
]
    const [todos, setTodos] = useState(data)

    const deleteTodo = (todo) => {
        setTodos(todos.filter((e) => {
            return e!==todo
        }))
    }
    // console.log(todos)
    return (
        <div>
            <table className="table table-success table-striped-columns">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => 
                        <tr key={todo.sno}>
                        <th scope="row">{todo.sno}</th>
                        <td>{todo.title}</td>
                        <td>{todo.desc}</td>
                        <td><button className="btn btn-danger" onClick={deleteTodo}>Delete</button></td>
                        <td><button className="btn btn-primary">Modify</button></td>
                    </tr>       
                )}
                </tbody>
            </table>
        </div>
    )
}