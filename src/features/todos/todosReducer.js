import { 
  ADD_TODO, 
  REMOVE_TODO, 
  UPDATE_TODO, 
  LOAD_TODOES
              } from './actionsTodo'

const initialState = {
  status: 'idle',
  entities: [],
}


export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        entities: [ action.payload, ...state.entities],
      }
    }
    case UPDATE_TODO: {
      const changedEntities = state.entities.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        else{
          return action.payload;
        }   
      });
      return {
        ...state,
        entities: changedEntities.sort((todo1, todo2) =>  todo1.isDone - todo2.isDone )
       }
    }
    case REMOVE_TODO: {
      return {
        ...state,
        entities: state.entities.filter((todo) => todo.id !== action.payload),
      }
    }
    case LOAD_TODOES: {
      return {
        ...state,
        status:   'idle',
        entities: [...action.payload].sort((todo1, todo2) =>  todo1.isDone - todo2.isDone )
      }
    }
    default:
      return state
  }
}
