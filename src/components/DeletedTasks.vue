<template>
    <div class="container">
        <div class="row">
            <div class="col-12 pt-5">
                <h3>Todos that you have deleted</h3>
                <div class="legend mt-5">
                    <span>Double click to add deleted todo back to your todo list</span>
                    <span>
                        <span class="incomplete-box"></span> = Incomplete
                    </span>
                    <span>
                        <span class="complete-box"></span> = Complete
                    </span>
                </div>
            </div>
            <div v-if="!allDeletedTodos.length" class="col-12 d-flex justify-content-center mt-5"> <p> No deleted Todos </p> </div>
            <div v-else class="col-12 todos">
                <div class="card todo" @dblclick="onDblClick(todo)" v-for="todo in allDeletedTodos" v-bind:key="todo.id" v-bind:class="{'is-complete':todo.completed}" v-on:class="todo">
                    <div class="card-body">
                        <p class="card-text">{{todo.title}}</p>
                    <i @click="deletePermanently(todo.id)" class="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Todos",
    methods: {
        ...mapActions([ 'deletePermanently',"addTodoFromDeleted"]),
        onDblClick(todo){
            const reactivateTodo = {
                id: todo.id,
                title: todo.title,
                completed: false // completed set to false as this will be considered a new Todo when added
            }
            // adding the deleted todo as a new todo 
            this.addTodoFromDeleted(reactivateTodo)
        }
    },
    computed: mapGetters(['allDeletedTodos']),
    created() {
        //this.fetchTodos();
    }
}
</script>


<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1 rem;
    }

    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }

    .legend{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }
    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }

    .is-complete{
        background: #35495e;
        color: #fff;
    }

    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }

</style>