<template>

    <b-row>
      <b-col cols="12">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
        <b-form-checkbox @input="setFilterList()" value="1" checked>Em Aberto</b-form-checkbox>
        <b-form-checkbox value="2">Concluídas</b-form-checkbox>
        <b-form-checkbox value="3">Arquivadas</b-form-checkbox>
        <b-form-checkbox value="4">Removidas</b-form-checkbox>
      </b-form-checkbox-group>
    </b-col>
  </b-row>

</template>

<script>
  
export default {

  data() {
    return {
      selected: [1],
    }
  },

  methods: {
    setFilterList() {
      this.$emit('adicionaFiltro',this.selected)
    }
  },
}
</script>