import { l as o, a as r } from "../chunks/BwlVQz40.js";
const style = document.createElement("style");
style.innerHTML = `
.titlebar .p-2 .text-sm {
  color: transparent;
  position: relative;
}
.titlebar .p-2 .text-sm::after {
  content: "femboyware.exe";
  position: absolute;
  color: var(--color-zinc-200);
  left: 5%;
}
:root {
  --color-amber-400: rgba(218, 112, 214, 0.7) !important;
  --color-green-200: rgba(255, 240, 245, 0.8) !important;
  --color-green-500: rgba(75, 0, 130, 0.5) !important;
  --color-blue-200: rgba(255, 105, 180, 0.7) !important;
  --color-blue-500: rgba(147, 112, 219, 0.7) !important;
  --color-zinc-50: rgba(255, 240, 245, 0.8) !important;
  --color-zinc-200: rgba(221, 160, 221, 0.8) !important;
  --color-zinc-400: rgba(218, 112, 214, 0.7) !important;
  --color-zinc-500: rgba(186, 85, 211, 0.7) !important;
  --color-zinc-700: rgba(255, 255, 255, 0) !important;
  --color-zinc-800: rgba(147, 112, 219, 0.15) !important;
  --color-zinc-900: rgba(75, 0, 130, 0.5) !important;
  --color-gold-base: rgba(218, 112, 214, 0.7) !important;
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
  background-image: url("https://cdn.shopify.com/s/files/1/0566/0445/9061/files/femboy_banner_1024x1024.jpg?v=1680867742");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(4px); /* reduced blur for better visibility */
  z-index: -1; /* put the blurred bg behind the content */
  pointer-events: none; /* let clicks pass through */
  opacity: 0.6;
}
[data-mprt="3"] {
  opacity: 0.8; /* slightly more opaque for better readability */
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
  background-image: url("https://c10.patreonusercontent.com/4/patreon-media/p/campaign/10795315/0d2a82e80e784d09b0f4381871efcd71/eyJ3IjozNjB9/4.jpg?token-time=1745712000&token-hash=_JPRP19IPacoOdGCY39ajLS3plE30YThxQ8R1-XtPIU%3D");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  bottom: 5%;
  opacity: 0.85;
}

`;
document.head.appendChild(style);


export { o as load_css, r as start };