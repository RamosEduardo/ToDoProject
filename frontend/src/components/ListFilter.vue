<template>

  <b-col cols="12">
    <b-row>
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
        <b-form-checkbox @input="teste()" value="1">Em Aberto</b-form-checkbox>
        <b-form-checkbox value="2">Concluídas</b-form-checkbox>
        <b-form-checkbox value="3">Arquivadas</b-form-checkbox>
        <b-form-checkbox value="4">Removidas</b-form-checkbox>
      </b-form-checkbox-group>
    </b-row>
  </b-col>

</template>

<script>
  
export default {

  data() {
    return {
      selected: [],
    }
  },

  methods: {
    teste() {
      console.log('Foi',this.selected);
      this.$emit('adicionaFiltro',this.selected)
    }
  },
}
</script>