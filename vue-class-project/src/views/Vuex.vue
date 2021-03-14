<template>
  <div class="container">
    {{ welcome }}, {{ userName }}
    <ul>
      <li
        v-for="todo in doneTodos"
        :key="todo.id"
      >
        <span>{{ todo.id }} | </span>
        <span>{{ todo.text }}</span>
      </li>
    </ul>
    <p>done todos: {{ doneTodoCounts }}</p>
    <input
      type="number"
      :value="id"
      @change="id = $event.target.value"
    >
    {{ getItemById(id) }}
    <hr>
    {{ $store.state.count }}
    <button
      class="btn btn-info mr-1"
      @click="addCount"
    >add count</button>
    <button
      class="btn btn-info mr-1"
      @click="addCustomCount(3)"
    >add 3 counts</button>
    <button
      class="btn btn-info"
      @click="addCustomCount(6)"
    >add 6 counts</button>
    <hr>
    <button
      class="btn btn-info"
      @click="doAction"
    >actions triggers mutation</button>
    <hr>
    <ul>
      <li
        v-for="user in getUsers"
        :key="user.id"
      >{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      id: 1,
    };
  },
  computed: {
    // ...mapState({
    //   welcome: state => state.message,
    //   userName: state => state.name
    // }),
    ...mapState({
      welcome: "message",
      userName: "name",
      todos: "todos",
    }),
    ...mapGetters({
      doneTodos: "doneTodos",
      doneTodoCounts: "doneTodoCounts",
      getTodoById: "getTodoById",
    }),
    getUsers() {
      return this.$store.state.UserModule.users;
    },

    // doneTodos() {
    //   return this.$store.getters.doneTodos;
    // },
    // ...mapState(['message', 'name']),
    // message() {
    //   return this.$store.state.message
    // },
    // name() {
    //   return this.$store.state.name
    // }
  },
  methods: {
    getItemById(id) {
      // value from input is string, convert to number
      this.id = parseInt(id);
      return this.getTodoById(id);
    },
    addCount() {
      this.$store.commit("addCount");
    },
    addCustomCount(n) {
      this.$store.commit("addCustomCount", n);
    },
    addPayloadCount(n) {
      this.$store.commit("addPayloadCount", { amount: n });
    },
    doAction() {
      this.$store.dispatch("increment");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>