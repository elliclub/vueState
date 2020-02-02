<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addLink">
        <input class="link-input" v-model="newLink" type="text" placeholder="add a link" />
      </form>
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
          {{ link }}
          <button v-on:click="removeLinks(index)">Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <Stats />
    </div>
    <div>
      <DisplayData />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Stats from "@/components/Stats.vue";
import DisplayData from "@/components/DisplayData.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      newLink: ""
    };
  },
  components: {
    Stats,
    DisplayData
  },
  computed: {
    ...mapState(["title", "links"])
  },
  methods: {
    ...mapMutations(["ADD_LINK"]),
    ...mapActions(["removeLink"]),
    addLink: function() {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
    },
    removeLinks: function(link) {
      this.removeLink(link);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
</style>