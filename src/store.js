import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    },
    mutations: {
        setStudents(state,students) {
            state.students = students;
        },
        addStudent(state, student) {
            state.students.push(student)
        },
        editStudent(state, student) {
            const index = state.students.findIndex(s => s.id === student.id);
            Vue.set(state.students, index, {...state.students[index], ...student})
        }
    },
    actions: {
        async getStudents(context) {
            const studentsFromAPI = (await axios.get('http://localhost:3000/students')).data;
            context.commit('setStudents', studentsFromAPI)
        },
        async createStudent(context, payload) {
            const studentToAPI = (await axios.post("http://localhost:3000/students", payload)).data;
            context.commit('addStudent', studentToAPI)
        },
        async editStudent(context, {names, id}) {
           const modifiedStudent = (await axios.put(`http://localhost:3000/students/${id}`, names)).data;
           context.commit('editStudent', modifiedStudent);
        }
    }
})
