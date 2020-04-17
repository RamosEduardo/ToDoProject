<template>
  <section class="todoapp">
    <nav-bar></nav-bar>

    <task-list style="margin-top:10px"></task-list>
  </section>

</template>

<script>

import NavBar from "./components/Nav";
import TaskList from "./components/TaskList";

export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
    "task-list": TaskList,
  },
};
</script>