<template>
    <div class="home">
        <div class="container">
            <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <AddTodo />
                        <FilterTodos/>
                        <Todos />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import FilterTodos from '@/components/FilterTodos.vue'
import Todos from '@/components/Todos.vue'


export default {
  name: 'Home',
  components: {
    AddTodo,
    FilterTodos,
    Todos
  }
}
</script>
