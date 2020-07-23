<template>
    <div class="deleteHistory">
        <DeletedTasks />
    </div>
</template>

<script>
import DeletedTasks from '@/components/DeletedTasks.vue'
export default {
    name: 'DeletedTodoHistory',
    components: {
        DeletedTasks
    }
}
</script>

<style>

</style>