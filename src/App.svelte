<script lang="ts">
  import ColorButton from './lib/ColorButton.svelte';

  let isMouseDown = false;
  let buttonsArr = new Array(calcButtonCount());

  function calcButtonCount() {
    const boxRowCount = parseInt((window.innerWidth / 48).toFixed());

    const boxColCount = parseInt((window.innerHeight / 48).toFixed());

    return boxRowCount * boxColCount;
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
  {#each buttonsArr as _}
    <ColorButton {isMouseDown} />
  {/each}
</main>

<style>
  :root {
    background-color: black;
  }

  main {
    display: flex;
    flex-wrap: wrap;
  }
</style>
