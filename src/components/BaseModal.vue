<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <!-- the name given to the transition will be used to point to this specific
  transition, to add animation "modal-enter-to" -->
  <transition name="modal">
    <dialog class="" open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props:['open'],
  emits: ['close',]
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.6s ease-out forwards; */
}

/* we did not define the to and from here because the keyframes will handle it for us */
.modal-enter-active {
  animation: modal-keyframes 0.5s ease-out;
}

.modal-leave-active {
  /* we add the reverse becaused we used to the same keyframes  */
  animation: modal-keyframes 0.5s ease-in reverse;
}

@keyframes modal-keyframes {
  /* if you are defining two states you can replace the 0% with "from" 
  and 100% with "to" */
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
