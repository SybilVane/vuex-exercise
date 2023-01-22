import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        students: []
    },
    getters: {
        students: state => state.students.map(student => ({...student, fullName: `${student.firstName} ${student.lastName}`}))
    }
})