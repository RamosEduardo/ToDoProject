<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-nav-text center>
        <b-nav-form class="centralizar">
          <b-form-input
            v-focus="true"
            @keyup.enter="addTask"
            class="mr-lg-2"
            placeholder="Adicionar Tarefa"
          />
        </b-nav-form>
      </b-nav-text>
    </b-navbar>
  </div>
</template>

<script>

import { Task } from "../models/Task";
import Focus from "../directives/focus";

export default {
  directives: {
    focus: Focus,
  },
  methods: {
    addTask ($event) {
      let value = $event.target.value
      let task = this.createTask(value)

      this.$http.post('http://localhost:3333/atividades', task).then((resp) => {
        console.log(resp);
        
        this.clearField($event)
      });
    },
    createTask (value) {
      let task = new Task()
      task.completed = false
      task.title = value
      return task
    },
    clearField () {
      this.$el.querySelector('input').value = ''
    }
  }
}
</script>

<style>
</style>