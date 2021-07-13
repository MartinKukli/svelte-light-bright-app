<script lang="ts">
  import ColorButton from './lib/ColorButton.svelte';

  let isMouseDown = false;
  let buttonsArr = new Array(100);

  function resetAll() {
    console.log('reset all');
  }

  function mouseIsDown() {
    isMouseDown = true;
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
    <button type="button">Reset button</button>
    <button type="button" on:click={resetAll}>Reset all</button>
  </section>
  <section class="colors">
    {#each buttonsArr as _}
      <ColorButton {isMouseDown} />
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
