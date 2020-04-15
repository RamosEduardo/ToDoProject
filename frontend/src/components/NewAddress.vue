<template>
  <div>

    <b-button v-b-modal.modal-scrollable>Cadastrar Endereço</b-button>

    <b-modal id="modal-scrollable" scrollable title="Cadastrar Endereço">
      <div>
        <b-input-group prepend="CEP" class="mt-3">
          <b-form-input v-mask="'99999-999'" @blur="checkCep"></b-form-input>
        </b-input-group>
      </div>
      <b-row>
        <b-col cols="8">
          <b-input-group prepend="Rua" cols="10" class="mt-3">
            <b-form-input v-model="address.logradouro"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="4">
          <b-input-group prepend="Num" cols="2" class="mt-3">
            <b-form-input v-model="address.numero"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-input-group prepend="Bairro" cols="6" class="mt-3">
            <b-form-input v-model="address.bairro"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="8">
          <b-input-group prepend="Cidade" cols="10" class="mt-3">
            <b-form-input v-model="address.cidade"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="4">
          <b-input-group prepend="UF" cols="2" class="mt-3">
            <b-form-input v-model="address.estado"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>

      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="outline-secondary" @click="createAddress()">
          Cadastrar
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancelar
        </b-button>
    </template>


    </b-modal>
  </div>
</template>

<script>

// import Address from "../models/Address";
import AwesomeMask from 'awesome-mask';

export default {
  data() {
    return {
      address: [],
    };
  },

  directives: {
    'mask': AwesomeMask
  },

  methods: {
    checkCep ($event) {
      let cep = $event.target.value
      this.$http.get('http://api.postmon.com.br/v1/cep/' + cep)
      .then((res) => {
        this.address = res.body
        console.log(this.address);
        
      }, (res) => {
        console.log(res)
      })
    },

    createAddress() {
      console.log('Endereco ', this.address);
      this.$http.post('http://localhost:3333/enderecos',this.address).then((res) => {
        console.log(res.body);
      });
    },

    hasAddress () {
      return Object.keys(this.address).length > 0
    }
  },

  created() {
    console.log(this.address);
  },
};
</script>
