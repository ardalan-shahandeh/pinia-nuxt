<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- filter -->

    <nav>
      <button @click="filter = 'all'"> All tasks </button>
      <button @click="filter = 'favs'"> Favs tasks </button>
    </nav>

    <!-- task list -->

    <div class="task-list" v-if="filter === 'all'">
      <p> Your have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <taskDetails :task="task"/>
      </div>
    </div>

    <hr>
    <hr>

    <div class="task-list" v-if="filter === 'favs'">
      <p> Your have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <taskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import taskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";

export default {
  components: { taskDetails },
  setup() {
    const taskStore = useTaskStore();

    const filter = ref('all')

    return { taskStore, filter };
  },
};
</script>
