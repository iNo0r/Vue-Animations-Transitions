<template>
  <!-- <ul> -->
  <!-- note transition will  not be renderd to the dom
    while <transition- group is rendered to the doom and we can appoint 
    it to replace another html tag like ul using tag="ul", we can appoint to 
    any valid html tag here, even to a component  -->
  <transition-group name="user-list" tag="ul">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }} || 'hi'
    </li>
  </transition-group>
  <!-- </ul> -->
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: ['noor', 'tarek', 'hassan', 'bitch', 'tazze']
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0%;
  padding: 0%;
}

li {
  border: 1px solid #cca;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  /* to watch for changes in all css properties, for example "transform"  */
  transition: all 1s ease-out;
}
.user-list-leave-active {
  /* to watch for changes in all css properties, for example "transform"  */
  transition: all 1s ease-in;
}
.user-list-enter-to,
.uawe-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
