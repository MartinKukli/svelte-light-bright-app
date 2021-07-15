export function generateButtonStyle() {
  const hexCode = Math.floor(Math.random() * 16777215).toString(16);

  const colorHex = `#${hexCode}`;
  const buttonBackground = `background: radial-gradient(circle, #eee, ${colorHex}, ${colorHex}, ${colorHex});`;
  const buttonBoxshadow = `box-shadow: 1px 1px 22px 3px ${colorHex}, 0 0 6px 1px ${colorHex} inset;`;

  return `${buttonBackground}${buttonBoxshadow}`;
}
