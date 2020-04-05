Vue.component("iz-server-status", {
  data() {
    return {
      status: "Critical",
    };
  },
  template: "<p>Server status: {{ status }}</p>",
});

new Vue({
  el: "#app",
});
