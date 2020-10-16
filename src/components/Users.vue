<template>
  <div>
    One user
    <div v-if="user">{{user[0].id}}</div>
  </div>
</template>
<script>
export default {
  name: "requestUsers",
  data() {
    return {
      user: ""
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let url = "https://reqres.in/api/users?page=2";
      const response = await fetch(url);
      const data = await response.json();
      this.user = data.data;
      console.log(this.user[0].id);
    }
  }
};
</script>