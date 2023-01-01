<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/monkey.webp" alt="pinia logo" width="75" height="75" />
      <h1> Ardalan </h1>
    </header>

    <!-- new task form -->

    <div class="addTask">
      <taskForm />
    </div>

    <!-- filter -->

    <nav>
      <button @click="filter = 'all'" class="button-62">All tasks</button>
      <button @click="filter = 'favs'" class="button-62">Favs tasks</button>
    </nav>

    <!-- loading -->

    <div v-if="loading" class="loading">
      Loading tasks ...
    </div>

    <!-- task list -->

    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <taskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ favCount }} favs left to do</p>
      <div v-for="task in favs" :key="task.id">
        <taskDetails :task="task" />
      </div>
    </div>

    <div class="reset-row">
      <button @click="taskStore.$reset" class="button-62"> reset state </button>
    </div>

  </main>
</template>

<script>
import { storeToRefs } from 'pinia';
import { ref } from "vue";
import taskDetails from "@/components/TaskDetails.vue";
import taskForm from "@/components/TaskForm.vue";
import { useTaskStore } from "./stores/TaskStore";

export default {
  components: { taskDetails, taskForm },
  setup() {
    const taskStore = useTaskStore();

    const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore)
    // fetch task
    taskStore.getTasks()

    const filter = ref("all");

    return { taskStore, filter ,tasks, loading, favs, totalCount, favCount };
  },
};
</script>
