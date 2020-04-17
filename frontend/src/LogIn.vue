<template>
  <div class="logon-container">
      <b-col className="form" cols="5">

        <form>

          <b-row>
            <b-col style="display:flex; align-itens:center; justify-content:center">
              <img src='./assets/logo.png' />
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12">
              <b-form-input placeholder="Login"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="12">
              <b-form-input type="password"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mt-4" style="display:flex; justify-content: center">
            <b-col>
              <b-button variant="danger" squared style="width:100%">Entrar</b-button>
            </b-col>
          </b-row>

          <b-row class="mt-4" style="display:flex; justify-content: center">
            <b-col>
              <router-link to='/cadastro'>Não sou Cadastrado</router-link>
            </b-col>
          </b-row>

        </form>
      </b-col>
  </div>
</template>

<style>
  .logon-container {
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: auto;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>