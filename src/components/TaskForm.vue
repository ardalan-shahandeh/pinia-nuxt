<template>
  <form @submit.prevent="handleSubmit">
    <input 
      type="text"
      placeholder="i need to ..."
      v-model="newTask" 
    />
    <button>Add</button>
  </form>
</template>

<script>
  import { ref } from 'vue'
  import { useTaskStore } from '../stores/TaskStore';
  
  export default {
    setup() {
      const taskStore = useTaskStore()
      
      const newTask = ref('')

      const handleSubmit = () => {
        if (newTask.value.length > 0) {
          taskStore.addTask({
            id: Math.floor(Math.random()*1000),
            title: newTask.value,
            isFav: false
          })
          newTask.value = ''
        }
      }
      return { handleSubmit, newTask}
    }
  }
</script>
