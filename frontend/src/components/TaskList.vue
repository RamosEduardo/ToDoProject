<template>
<b-container mt="4">
  <b-row>

    <b-col cols="3">

      <list-filter @adicionaFiltro='adicionaFiltro'/>
    
    </b-col>

    <b-col cols="9">

      <b-list-group>

        <b-list-group-item v-for="(atividade, index) in atividades" :key="index">

          <div class="d-flex justify-content-between align-items-center">

            <b-row>
              <div class="ml-3" v-b-toggle="atividade.titulo + '-' + index">
                {{ atividade.titulo }}
                <b-icon-arrow-down />
              </div>
            </b-row>

            <div>
              <b-badge v-if="atividade.status == 1" variant="info" pill>
                {{ '' }}
              </b-badge>
              <b-badge v-if="atividade.status == 2" variant="success" pill>
                {{ '' }}
              </b-badge>
              <b-badge v-if="atividade.status == 3" variant="warning" pill>
                {{ '' }}
              </b-badge>
              <b-badge v-if="atividade.status == 4" variant="danger" pill>
                {{ '' }}
              </b-badge>
            </div>
          </div>

          <b-collapse :id="atividade.titulo + '-' + index" class="mt-2">
   
              <b-row v-if="atividade.descricao">
                <b-col cols="12">
                  <p>{{ atividade.descricao }}</p>
                </b-col>
              </b-row>

              <b-row class="ml-1 mb-3 d-flex justify-content-left" align-self="end">
                <button-icon v-if="atividade.status > 2" @open="updateStatus(atividade, 1)" class="mr-3" :id="atividade.id" icon="box-arrow-in-up" text="Restaurar" color="outline-info"/>
                <button-icon v-if="atividade.status == 2" @open="updateStatus(atividade, 1)" class="mr-3" :id="atividade.id" icon="unlock" text="Reabrir" color="outline-info"/>
                <button-icon v-if="atividade.status < 2" @open="updateStatus(atividade, 2)" class="mr-3" :id="atividade.id" icon="check" text="Concluir" color="outline-success"/>
                <button-icon v-if="atividade.status < 2" @open="updateStatus(atividade, 3)" class="mr-3" :id="atividade.id" icon="box-arrow-in-down" text="Arquivar" color="outline-warning"/>
                <button-icon v-if="atividade.status < 2" @open="updateStatus(atividade, 4)" icon="x-circle" :id="atividade.id" text="Excluir" color="outline-danger"/>
              </b-row>

              <b-row>
                <b-col cols="12">
                  <b-form-select size="sm" v-model="atividade.endereco_id">
                    <b-form-select-option :value="endereco.id" v-for="(endereco, index) of enderecos" :key="index">
                      {{endereco.rua}}
                    </b-form-select-option>
                    <b-form-select-option :value="null">
                      Vincular a um endereço
                    </b-form-select-option>
                  </b-form-select>
                </b-col>
              </b-row>

          </b-collapse>

        </b-list-group-item>

      </b-list-group>

    </b-col>

  </b-row>
</b-container>
</template>

<script>

import ListFilter from './ListFilter';
import Botao from './Botao';
// import _ from 'lodash';

export default {
  data() {
    return {
      atividades: [],
      enderecos: [],
      filterList: []
    }
  },
  computed: {

    // atividadesFiltradas: () => {
    //   return this.atividades;
    // },

  },
  components: {
    'list-filter': ListFilter,
    'button-icon': Botao
  },

  methods: {

    adicionaFiltro(listFilter) {
      this.filterList = listFilter;
    },

    updateStatus (atividade, status) {

      atividade.status = status;

      this.$http.put(`http://localhost:3333/atividades/${atividade.id}`, 
        JSON.stringify({status: status})).then(resp => {
          console.log('Resp', resp);
        })
    }

  },

  created() {
    
    this.$http.get('http://localhost:3333/atividades').then(resp => {
      this.atividades = resp.body.atividades;
    });

    this.$http.get('http://localhost:3333/enderecos').then(resp => {
      this.enderecos = resp.body.enderecos;
    });
    
  },
}
</script>

<style>
.todo-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.todo-list li {
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
}

.todo-completed{
  text-decoration: line-through;
}

.todo-list li:last-child {
	border-bottom: none;
}

.todo-list li.editing {
	border-bottom: none;
	padding: 0;
}

.todo-list li.editing .edit {
	display: block;
	width: 506px;
	padding: 12px 16px;
	margin: 0 0 0 43px;
}

.todo-list li.editing .view {
	display: none;
}

.todo-list li .toggle {
	text-align: center;
	width: 40px;
	/* auto, since non-WebKit browsers doesn't support input styling */
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border: none; /* Mobile Safari */
	-webkit-appearance: none;
	appearance: none;
}

.todo-list li .toggle:after {
	content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}

.todo-list li .toggle:checked:after {
	content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}

.todo-list li label {
	word-break: break-all;
	padding: 15px 60px 15px 15px;
	margin-left: 45px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
}

.todo-list li.completed label {
	color: #d9d9d9;
	text-decoration: line-through;
}

.todo-list li .destroy {
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
	color: #af5b5e;
}

.todo-list li .destroy:after {
	content: '×';
}

.todo-list li:hover .destroy {
	display: block;
}

.todo-list li .edit {
	display: none;
}

.todo-list li.editing:last-child {
	margin-bottom: -1px;
}

/*
	Hack to remove background from Mobile Safari.
	Can't use it globally since it destroys checkboxes in Firefox
*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
	.toggle-all,
	.todo-list li .toggle {
		background: none;
	}

	.todo-list li .toggle {
		height: 40px;
	}

	.toggle-all {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
		-webkit-appearance: none;
		appearance: none;
	}
}
</style>