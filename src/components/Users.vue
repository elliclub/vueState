<template>
  <div>
    One user:
    <span v-if="user">{{user[0].id}}</span>
    <div>
      <button @click="randomize()">Randomize!</button>
      <img :src="randomizedUser.avatar" />
      <div>Randomized user: {{randomizedUser.first_name }} {{randomizedUser.last_name}}</div>
      <div>Randomized user number: {{randomizedUser.id}}</div>
      <button @click="reverseString()">Klick</button>
      <span>{{reverseName}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "requestUsers",
  data() {
    return {
      user: "",
      randomizedUser: "",
      reverseName: ""
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {},
  methods: {
    async fetchData() {
      let url = "https://reqres.in/api/users?page=2";
      const response = await fetch(url);
      const data = await response.json();
      this.user = data.data;
    },
    randomize() {
      const random = Math.floor(Math.random() * this.user.length);
      return (this.randomizedUser = this.user[random]);
    },
    reverseString() {
      let userTest = this.user.filter(u => u.id === 7);
      this.reverseName = userTest[0].first_name
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>