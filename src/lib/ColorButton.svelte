<script>
  import { generateButtonStyle } from '../utility/Utility';

  export let isMouseDown;
  let buttonStyle = generateButtonStyle();

  function handleClick() {
    if (isMouseDown) {
      buttonStyle = generateButtonStyle();
    }
  }
</script>

<p class="button" style={buttonStyle} on:mouseover={handleClick} />

<style>
  .button {
    border-radius: 100%;
    border: none;
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
