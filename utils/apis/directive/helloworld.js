import { ref, onMounted, watch } from "vue";

export const textHelloWorld = () => {
  onMounted(() => {
    document.body.innerHTML = `<p>hello world</p>`;
    console.log("hello world");
  });
  document.body.innerHTML = `<p>hello world</p>`;
  console.log("hello world");
  return {};
};
