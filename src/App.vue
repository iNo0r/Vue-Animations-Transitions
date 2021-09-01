<template>
  <div class="container">
    <!-- to annimate the block whenever animateBlock is true -->
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- the enter equivalent to active  -->
    <!-- the after-enter is equivalent to finish  -->
    <!-- the leave equivalent to active  -->
    <!-- the after-leave is equivalent to finish  -->
    <!-- <transition
      name="para" -->
    <transition
      @before-enter="paraBeforeEnter"
      @enter="paraEnter"
      @after-enter="paraAfterEnter"
      @before-leave="paraBeforeLeave"
      @leave="paraLeave"
      @after-leave="paraAfterLeave"
    >
      <p v-if="paraIsVisible">the is only sometimes visible.</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragrapho</button>
  </div>
  <div class="container">
    <!-- we ad the mode to prevent showing ugly transitoin when 2 elements 
    animating at the same time  -->
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <!-- we added v-else here to notify vue that we only using one child inside 
      of a Transistion component -->
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <!-- it is important that the content of the an element is the one is not visible, 
  if the <transistion> itslef is not visble the effect wont work -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
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
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false
    };
  },
  methods: {
    paraAfterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },
    paraLeave(el) {
      console.log('Leave');
      console.log(el);
    },
    paraBeforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
    },
    paraAfterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    // done will tell the other animation's hooks to wait till this one finsih 
    paraEnter(el,done) {
      // console.log('enter');
      // console.log(el);
      let round = 1
      const myInterval = setInterval(function(){
        el.style.opacity = round * 0.01;
        round++
        if(round > 100){
          clearInterval(myInterval)
          done()
        }
      },20)

    },
    paraBeforeEnter(el) {
      // console.log('beforeEnter');
      // console.log(el);
      el.style.opacity = 0;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
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

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.5s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.5s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.animate {
  /* here we refer to the css keyframe set name, which is slide-fade */
  /* if we dont add "forwards" it will it will not freeze at at last animation point */
  animation: slide-fade 0.3s ease-out forwards;
}

.para-enter-active {
  /* binding it with keyframes  */
  animation: slide-fade 0.3s ease-out;
}

.para-leave-active {
  animation: slide-fade 0.3s ease-out;
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
