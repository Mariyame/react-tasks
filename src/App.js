import React from 'react'
import TaskList from './TaskList'

const App = () => {
    const tasks = [
        {id: 1, label: 'Acheter du lait', isDone: true},
        {id: 2, label: 'Prendre des vacances', isDone: false}
    ]
    return (
        <div>
        <h1>TACHES</h1>
        <TaskList tasks={tasks}/>
      </div>
    )

}

export default App
