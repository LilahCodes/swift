// credit 
// discord: __kaja_

import { l as o, a as r } from "../chunks/BwlVQz40.js";
const style = document.createElement("style");
style.innerHTML = `
.titlebar .p-2 .text-sm {
  color: transparent;
  position: relative;
}
.titlebar .p-2 .text-sm::after {
  content: "kittycat.exe"; /*change name in top left*/
  position: absolute;
  color:  var(--color-zinc-200);
  left: 5%;
}
:root {
  --color-amber-400: #ffffff !important;
  --color-green-200: white !important; /* alert text colour */
  --color-green-500: rgb(90,70,70) !important; /* alert background colour */
  --color-blue-200: #ff6347 !important; /* Tomato */
  --color-blue-500: #32cd32 !important; /* LimeGreen */
  --color-zinc-50: white !important; /* script titles */
  --color-zinc-200: #cccccc !important; /* main text colour */
  --color-zinc-400: #cccccc !important; /* Non important Buttons on the left */
  --color-zinc-500: #cccccc!important; /* close minimise buttons etc */
  --color-zinc-700: rgba(255, 255, 255, 0) !important; /* bar at the top */
  --color-zinc-800: #cccccc !important; /* dividing lines */
  --color-zinc-900: rgb(100,80,80) !important; /* main background colour */
  --color-gold-base: #ccccc !important; /* gold bars */
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
  background-image: url("https://img.freepik.com/premium-photo/cute-white-kitten-yellow-background-goes-looks-camera_1048944-15605364.jpg?semt=ais_hybrid&w=740");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(1px); /*disable if u want clear img*/
  z-index: -1; /* put the blurred bg behind the content */
  pointer-events: none; /* let clicks pass through */
}
[data-mprt="3"] {
  opacity: 0.8; /* controls how well you can see the background image */
}
[data-mprt="9"] {
  display: none !important; /*hide the stupid fucking code minimap*/
}
.decorationsOverviewRuler {
  display: none !important; /*hide the weird indent on the right side of the code input*/
}

.logo-icon svg {
  display: none !important; /* hide original svg */
}

.logo-icon::before {
  content: "";
  display: inline-block;
  width: 32px; /* adjust as needed */
  height: 32px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4f/Kitty_emoji.png"); /*new logo link for top left*/
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  bottom: 5%;
}

`;
document.head.appendChild(style);
export { o as load_css, r as start };
