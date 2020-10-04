import React from 'react'
import Task from './Task'

const TaskList = ({tasks})  => (
   <ul>
       {tasks.map(task => ( 
           <li key={task.id}>
           <Task task={task}/>
           </li>
           ))}
   </ul>
)
export default TaskList