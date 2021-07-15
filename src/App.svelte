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
  class="main"
  on:mousedown|preventDefault={mouseIsDown}
  on:mouseup|preventDefault={mouseIsUp}
>
  <section class="buttons buttons--max-width">
    <button class="buttons__button" type="button" on:click={reset}
      >Reset button</button
    >
    <button class="buttons__button" type="button" on:click={resetAll}
      >Reset all</button
    >
  </section>
  <section class="colors colors--max-width">
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
    margin: 20px auto 20px auto;
  }

  .buttons--max-width {
    width: 50%;
  }

  .buttons__button {
    background-color: black;
    color: white;
    border: 1px solid purple;
    border-radius: 10%;
    padding: 9px;
    font-size: large;
  }

  .buttons__button:hover {
    cursor: pointer;
  }

  .colors {
    border-bottom: 1px solid purple;
    border-top: 1px solid purple;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .colors--max-width {
    margin: auto;
    width: 50%;
  }
</style>
