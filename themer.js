import { l as load_css, a as start } from "../chunks/wUyw4KCP.js";
const style = document.createElement("style");
style.innerHTML = `
.titlebar .p-2 .text-sm {
  color: transparent;
  position: relative;
}
.titlebar .p-2 .text-sm::after {
  content: "ratsploit.exe"; /*change name in top left*/
  position: absolute;
  color:  var(--color-zinc-200);
  left: 5%;
}
:root {
  --color-amber-400: #dda0dd !important;
  --color-green-200: white !important; /* alert text colour */
  --color-green-500: #23122c !important; /* alert background colour */
  --color-blue-200: #ff6347 !important; /* Tomato */
  --color-blue-500: #32cd32 !important; /* LimeGreen */
  --color-zinc-50: white !important; /* script titles */
  --color-zinc-200: #dda0dd !important; /* main text colour */
  --color-zinc-400: #dda0dd !important; /* Non important Buttons on the left */
  --color-zinc-500: #dda0dd !important; /* close minimise buttons etc */
  --color-zinc-700: rgba(255, 255, 255, 0) !important; /* bar at the top */
  --color-zinc-800: rgb(57, 43, 79) !important; /* dividing lines */
  --color-zinc-900: rgb(41, 31, 57) !important; /* main background colour */
  --color-gold-base: #dda0dd !important; /* gold bars */
}
[role="code"] {
  position: relative;
  z-index: 1;
}
/* all this is a bullshit workaround to not overlap over the code*/
[role="code"]::before {
  content: "";
  position: absolute;
  inset: 0; /* shorthand for top/right/bottom/left: 0 */
  background-image: url("https://t4.ftcdn.net/jpg/02/98/83/83/360_F_298838382_eIUHV1oJGgejdgYVhMklu9p3Gax2lSqF.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(4px); /*disable if u want clear img*/
  z-index: -1; /* put the blurred bg behind the content */
  pointer-events: none; /* let clicks pass through */
}
[data-mprt="3"] {
  opacity: 0.8; /* controls how well you can see the background image */
}
[data-mprt="9"] {
  display: none !important; /*hide the stupid fucking code minimap*/
}
`;
document.head.appendChild(style);
export { load_css, start };
