import { c } from "./localStorage.e2b754e4.js";
const o = new URLSearchParams(window.location.search);
const t = o.get("shareKey") || "";
if (t) {
  c("SHAREKEY", t);
}

const a = document.querySelectorAll(".chat");
const r = document.querySelectorAll(".draw");

a.forEach((e) => {
  e.addEventListener("click", () => {
      e.innerHTML = "正在转跳中";
    window.location.href = "https://ai.chataix.top/"; // 修改为你ai地址
  });
});

r.forEach((e) => {
  e.addEventListener("click", () => {
    window.location.href = "https://ai.chataix.top/ai_draw"; // 修改为你画画地址
  });
});