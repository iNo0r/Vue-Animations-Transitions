<template>
  <div class="container">
    <!-- to annimate the block whenever animateBlock is true -->
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return { dialogIsVisible: false, animatedBlock: false };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* here we specify wich propery to be transited */
  /* all for all  */
  /* transition: all; */
  /* so when ever transform triggered the transition will fire  */
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transofrom is a css property */
  /* it will only move the object from a place to another without transition */
  /* transform: translateX(-150px); */
  /* here we refer to the css keyframe set name, which is slide-fade */
  /* if we dont add "forwards" it will it will not freeze at at last animation point */
  animation: slide-fade 0.3s ease-out forwards;
}

/* slide-name is just a name, you can change it */
@keyframes slide-fade {
  /* at 0 of animation time  */
  0% {
    transform: translateX(0px) scale(1);
  }
  /* at 70% of animation time  */
  /* scale(1.1) means 10% bigger */
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
