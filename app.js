let component = {
  data() {
    return {
      status: "Critical",
    };
  },
  template:
    "<p>Server status: {{ status }} | <button @click='changeStatus'>Change</button></p>",
  methods: {
    changeStatus() {
      this.status = "Normal";
    },
  },
};

new Vue({
  el: "#app",
  components: {
    "iz-server-status": component,
  },
});
