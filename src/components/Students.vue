<template>
  <div>
    <v-flex sm8 offset-sm2 v-if="$store.getters.isLoaded">
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Students</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="(student, index) in students" :to="'/editStudent/' + index">
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
import {mapGetters} from 'vuex';

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['students']),
  },
};
</script>
