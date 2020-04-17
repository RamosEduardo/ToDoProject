<template>
  <b-col>
    <b-form-select :disabled="atividade.status !== 1 ? true : false" 
      size="sm" 
      v-model="atividade.endereco_id"
      @input="setEndereco(atividade.id, atividade.endereco_id)" 
    >


      <b-form-select-option 
        :value="endereco.id" 
        v-for="(endereco, index) of enderecos" 
        :key="index"
      >
        {{endereco.rua}}
      </b-form-select-option>

      <b-form-select-option :value="null">
        Vincular a um endereço
      </b-form-select-option>
    </b-form-select>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      enderecos: []
    }
  },

  props: {
    atividade: {
      required: true,
      type: Object
    },
    newAddress: {
      type: Object
    }
  },

  methods: {

    setEndereco (idAtividade, idEndereco) {
      this.$emit('set-endereco', idAtividade, idEndereco)
    },

    async listAddress() {
      await this.$http.get("http://localhost:3333/enderecos").then((resp) => {
        this.enderecos = resp.body.enderecos;
      }).catch(err => console.log('Erro', err));
    },
  },

  created() {
    this.listAddress();
    this.enderecos.push(this.newAddress)
  },

  beforeUpdate() {
    if (this.newAddress.id) {
      this.enderecos.push(this.newAddress)
    }
  },

}
</script>