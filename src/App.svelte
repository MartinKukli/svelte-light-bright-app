<script lang="ts">
  import ColorButton from './lib/ColorButton.svelte';
  import { buttons, changeStyle, reset, resetAll } from './utilities/store';

  let isMouseDown = false;

  function mouseIsDown() {
    isMouseDown = true;

    changeStyle();
  }

  function mouseIsUp() {
    isMouseDown = false;
  }
</script>

<main
  on:mousedown|preventDefault={mouseIsDown}
  on:mouseup|preventDefault={mouseIsUp}
>
  <section class="buttons">
    <button type="button" on:click={reset}>Reset button</button>
    <button type="button" on:click={resetAll}>Reset all</button>
  </section>
  <section class="colors">
    {#each $buttons as value, key}
      <ColorButton id={key} color={value} {isMouseDown} />
    {/each}
  </section>
</main>

<style>
  :root {
    background-color: black;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
  }

  .colors {
    border-style: solid;
    border-top-color: purple;
    border-top-width: 1px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
</style>
