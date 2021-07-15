<script lang="ts">
  import { reset, updateClickedButton } from '../utilities/store';

  export let id: number;
  export let color: string;
  export let isMouseDown: boolean;

  function updateColor() {
    updateClickedButton(id);
  }

  function resetColor() {
    updateClickedButton(id);
    reset();
  }

  function handleMouseOver() {
    isMouseDown && updateClickedButton(id);
  }
</script>

<p
  id={id.toString()}
  class="button"
  style={color}
  on:click={updateColor}
  on:dblclick={resetColor}
  on:mouseover={handleMouseOver}
/>

<style>
  .button {
    border-radius: 100%;
    box-sizing: border-box;
    cursor: pointer;
    height: 50px;
    margin: 0;
    outline: none;
    padding: 0;
    width: 50px;
  }

  .button:active {
    outline: none;
  }
</style>
