import { ref, onUnmounted } from 'vue';

export default function getMousePosition() {
  const posX = ref(0);
  const posY = ref(0);

  const update = (event) => {
    posX.value = event.pageX;
    posY.value = event.pageY;
  };

  window.addEventListener('mousemove', update);

  // unmounted lifecycle of the component which imported this file
  onUnmounted(() => window.removeEventListener('mousemove', update));

  return {
    posX,
    posY,
  };
}
