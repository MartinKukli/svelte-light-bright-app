<script>
  import { generateButtonStyle } from '../utility/Utility';

  export let isMouseDown;
  let buttonStyle;

  function updateColor() {
    buttonStyle = generateButtonStyle();
  }

  function clearColor() {
    buttonStyle = undefined;
  }

  function handleMouseOver() {
    isMouseDown && updateColor();
  }
</script>

<p
  class="button"
  style={buttonStyle}
  on:click={updateColor}
  on:dblclick={clearColor}
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
