import { useSelector } from 'react-redux'

import {MemoListItem} from './MemoListItem'

export const TodoList = () => {
  const todoIds = useSelector((state) => state.todos.entities.map(todo => todo.id));

 return (
  todoIds.map((id) => {
  return (
    <li key={id}>
        <MemoListItem  id={id} />
    </li>    
   )
  })
 )
}

