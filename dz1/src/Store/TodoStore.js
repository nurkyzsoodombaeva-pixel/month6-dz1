import {create} from "zustand"
export const UseTodoStore = create((set) => ({
    todos: [],
    addTodo: (text)=>
        set((state)=>({
            todos:[...state.todos,{
                id: Date.now(),
                text,
                isComleted: false
            },],
        })),
    removeTodo: (id)=>
        set((state)=>({
            todos: state.todos.filter((todo)=>todo.id !== id)
        })),
    toggleTodo: (id)=>
        set((state)=>({
            todos: state.todos.map((todo)=>todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
        }))
}))