<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="i need to ..." v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<script>
  import { useTaskStore } from '../stores/TaskStore';
  
  export default {
      const taskStore = useTaskStore()
      const newTask = ref('')
  }
</script>
