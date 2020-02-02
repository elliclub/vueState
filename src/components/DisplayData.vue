<template>
  <div class="hello">
    <div class="wrapper">
      <input class="input-form" v-model="inputData" type="text" placeholder="Enter random digit" />
      <button class="button" @click="passData()">Click me</button>
    </div>
    <p>{{ myRes }}</p>
  </div>
</template>

<script>
export default {
  name: "DisplayData",
  data() {
    return {
      myRes: "",
      inputData: ""
    };
  },
  methods: {
    fetchData() {
      let url = "http://numbersapi.com/";
      fetch(url + `${this.inputData}`)
        .then(res => res.text())
        .then(res => (this.myRes = res));
      return this.myRes;
    },
    passData() {
      this.fetchData();
      this.inputData = "";
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.input-form {
  width: 100px;
  height: 20px;
  margin-right: 10px;
}
</style>