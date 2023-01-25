<template>
  <div>
    <div v-if="isLoaded">
      <v-flex sm8 offset-sm2>
        <v-card>
          <v-toolbar dark>
            <v-toolbar-title>Edit Student</v-toolbar-title>
          </v-toolbar>
          <v-form>
            <v-container>
              <v-layout>
                <v-flex xs12 md4>
<!--                  if I used v-model here I would update name instantly and alter it outside the mutation-->
                  <v-text-field @input="updateFirstName" :value="student.firstName" label="First Name" required/>
                  <v-text-field @input="updateLastName" :value="student.lastName" label="Last Name" required/>
                </v-flex>
              </v-layout>
            </v-container>
            <v-btn @click="submit">submit</v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <br>
      <Students/>
    </div>
    <div v-else>
      LOADING...
    </div>
  </div>
</template>

<script>
import Students from "./Students";
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  computed: {
    ...mapGetters(['isLoaded']),
    student() {
      return this.$store.getters.findStudent(this.$route.params.id);
    }
  },
  methods: {
    async submit() {
      const firstName = this.firstName || this.student.firstName;
      const lastName = this.lastName || this.student.lastName;

      await this.$store.dispatch('editStudent', {id: this.$route.params.id, names: {firstName, lastName}})
    },
    updateFirstName(value) {
      this.firstName = value;
    },
    updateLastName(value) {
      this.lastName = value;
    },
  },
  components: {
    Students
  }
};
</script>
