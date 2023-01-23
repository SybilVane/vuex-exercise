<template>
  <div>
    <v-flex sm8 offset-sm2 v-if="$store.getters.isLoaded">
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Students</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="(student, index) in $store.getters.students" :to="'/editStudent/' + index">
            <v-list-tile-content>
              <v-list-tile-title v-text="student.fullName"/>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <div v-else>
      LOADING...
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {}
  },
  computed: mapState({
    students: state => state.students,
  }),
};
</script>