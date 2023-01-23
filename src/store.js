import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        students: []
    },
    getters: {
        students: state => state.students.map(student => ({
            ...student,
            fullName: `${student.firstName} ${student.lastName}`
        })),
        // findStudent: state => id => state.students.find(student => student.id == id),
        findStudent: function findStudent(state) {
            return function (id) {
                return state.students.find(student => student.id == id);
            }
        },
        isLoaded: state => !!state.students.length
    }
})