<template>

  <b-col cols="12">

    <b-row>
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Em Aberto
        </b-form-checkbox>
      </b-row>

      <b-row>
        <b-form-checkbox
          id="checkbox-2"
          name="checkbox-2"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Concluidas
        </b-form-checkbox>
      </b-row>

      <b-row>
        <b-form-checkbox
          id="checkbox-3"
          name="checkbox-3"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Arquivadas
        </b-form-checkbox>
      </b-row>

      <b-row>
        <b-form-checkbox
          id="checkbox-4"
          name="checkbox-4"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Deletadas
        </b-form-checkbox>
      </b-row>

  </b-col>

</template>

<script>
export default {
  
}
</script>