import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState = {
   todos: [{id:1,text:"Hello world"}]

}

export const todosSlice = createSlice({
     name: "todo",
     initialState,
     reducers: {
        addTodo: (state, action) => {
             const todo={
                id:nanoid(),
            text:action.payload,
        }
             
        },
   
        removeTodo: (state,action) => {
          state.todos = state.todos.filter((todo) => todo.id !==action.payload)
     },

    }
})

export const  {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

//as a hw we need to update and delete todo used here;
