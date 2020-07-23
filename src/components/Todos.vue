<template>
    <div class="row">
        <div class="col-12">
             <h3>Todos</h3>
            <div class="legend">
                <span>Double click to mark as complete</span>
                <span>
                    <span class="incomplete-box"></span> = Incomplete
                </span>
                <span>
                    <span class="complete-box"></span> = Complete
                </span>
            </div>
        </div>
        <div class="col-12 todos">
            <div class="card todo"  @dblclick="onDblClick(todo)" v-for="todo in allTodos.slice().reverse()" v-bind:key="todo.id" v-bind:class="{'is-complete':todo.completed}" v-on:class="todo">
                <div class="card-body">
                    <p class="card-text">{{todo.title}}</p>
                    <i @click="addToDeletedTodoList(todo)" class="fas fa-trash-alt"></i>
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
        ...mapActions(['fetchTodos', 'addToDeletedTodoList', "updateTodo"]),
        onDblClick(todo){
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed 
            }

            this.updateTodo(updTodo)
        }
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos();
    }
}
</script>


<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
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