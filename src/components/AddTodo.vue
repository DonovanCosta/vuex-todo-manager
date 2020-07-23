<template>

        <div class="row mb-3">
            <div class="col-12">
                <h3>Add todo</h3>
                <div class="col-lg-12 justify-content-center d-flex">
                    <form @submit="onSubmit" class="form-inline col-lg-6">
                        
                        <div class="form-group">
                            
                            <input type="text" class="form-control form-control-lg" v-model="title" placeholder="Add Todo...">
                            
                            <button type="submit" class="btn btn-primary btn-lg ml-2">Add ToDo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "addTodo",
    data(){
        return {
            title: ""
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title)
            this.title = "" // reset the form
        }
    }
}
</script>

<style scoped>
    /* form {
        display: flex;
    }
    input[type="text"]{
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }

    input[type="submit"]{
        flex: 2; 
        background: #41b883;
        color: #fff;
        border: 1px solid #41b883;
        cursor: pointer;
    } */
</style>