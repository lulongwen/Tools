<template>
  <div class="index">
    <p>{{appName}}</p>

    <p>{{username}}</p>

    <p>{{lastLetter}}</p>

    <p>VERSION: {{version}}</p>
  </div>
</template>

<script>
/**
 * import vuex from 'vuex' 解构赋值的用法
 * mapState, mapGetters 都是属性，一般用在 computed 和 data里面
 * mapMutations, mapActions 都是方法，放在 methods 里面
 */
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    // state.js  {appName: this.$store.state.appName} 解构赋值
    // ...mapState(['appName']),
    ...mapState({
      appName: state => state.appName,
      // 访问 user模块
      username: state => state.user.username
    }),

    // 命名空间的用法
    ...mapState('user', {
      username: state => state.username
    }),
    /*
    appName() {
      return this.$store.state.appName
      return this.$store.getters.appName
      // user 模块名
      return this.$store.user.username
    }
    */

    // getters.js
    ...mapGetters(['version', 'todo']),
    ...mapGetters('user', ['firstLetter']),

    ...mapGetters({
      // getToDo 不是字符串, 对应的是getter里面的一个方法名字 
      // 然后将这个方法名字重新取一个别名 todo
      todo: 'getToDo',
    }),

    // 如果 value值改变，lastLetter就自动计算
    lastLetter() {
      return this.value.substr(-1, 1);
    }
  },
  data() {
    return {
      value: "",
      name: this.$store.state.name
    };
  },

  methods: {
    ...mapActions(['incrementAsync', 'addTodo']),
    ...Mutations(['increment']),

    ...mapMutations({
      // clickTotal 是mutation 里的方法
      // totalAlise是重新定义的一个别名方法，本组件直接调用这个方法
      totalAlise: 'clickTotal',
    }),
    ...mapActions({
      // 第一个blogAdd是定义的一个函数别名称，挂载在到this(vue)实例上，
      // 后面一个blogAdd 才是actions里面函数方法名称
      blogAdd: 'blogAdd',
    }) 


    increment() {
      // this.$store.commit('increment', {num: 2})
      this.incrment({ num: 2 });
    },
    incrementAsync() {
      // this.$store.dispatch('incrementAsync', {num: 200})
      this.incrementAsync({ num: 200 });
    }
  }
};
</script>

