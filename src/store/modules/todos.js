import axios from 'axios'   


const state = {
    todos: [],
    deletedTodos: []
};

const getters = {
    // reverse response data array so that the most recently added tasks appear first
    allTodos: (state) => state.todos,
    allDeletedTodos: (state) => state.deletedTodos
}

const actions = {

    async fetchTodos({ commit }){
        const response = await axios.get('http://localhost:3000/todos')
        
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title){
        const response = await axios.post('http://localhost:3000/todos',{ title, completed: false})

        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id){
        axios.delete(`http://localhost:3000/todos/${id}`).then(()=>{
            commit('removeTodo', id)
        })
    },
    async filterTodos( {commit }, e ){
        // Get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
       
        const response = await axios.get(`http://localhost:3000/todos?_limit=${limit}`)
        
        commit('setTodos', response.data);
    },
    async updateTodo({ commit }, updTodo){
        const response = await axios.put(`http://localhost:3000/todos/${updTodo.id}`, updTodo)

        commit('updateTodo', response.data)
    },
    // permanently delete the todo 
    deletePermanently({ commit }, id){

        commit('removeDeletedTodo', id)
    },
    //delete the todo in the todo list, and add it to the deleted todos list
    async addToDeletedTodoList({ commit, dispatch }, todo){

        return dispatch('deleteTodo', todo.id).then(() =>{
            commit('addToDeletedList', todo)
        })
    },
    // add the deleted todo back to the todos list and remove it from the deleted todos list
    async addTodoFromDeleted({ commit, dispatch}, todo){
        return dispatch('addTodo', todo.title).then(() =>{
            commit('removeDeletedTodo', todo.id)
        })
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    // add deleted todo to the deleted todo list 
    addToDeletedList: (state, todo) => state.deletedTodos.unshift(todo),
    //remove deleted todo from the deleted todo list
    removeDeletedTodo: (state, id ) => state.deletedTodos = state.deletedTodos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)

        if(index !== -1){
            state.todos.splice(index, 1, updTodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}