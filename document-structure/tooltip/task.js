"use strict"
const hasTooltips = document.querySelectorAll(".has-tooltip");
const position = ["bottom", "right", "top", "left", "top", "right"];

[...hasTooltips].map((elem, index) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    const tooltip = document.createElement("div");
    tooltip.append(elem.title);
    tooltip.classList.add("tooltip", "tooltip_active");
    tooltip.setAttribute("data-position", position[index]);
    const tooltips = document.querySelectorAll(".tooltip");

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains("tooltip")) {
      return elem.nextElementSibling.remove();
    }
    
    if (document.querySelector(".tooltip")) {
      tooltips.forEach((tooltip) => tooltip.remove());
    }

    elem.insertAdjacentElement("afterend", tooltip);
    setPositionTooltip(index, elem, tooltip);
  })
});

document.addEventListener("scroll", () => {
  if (document.querySelector(".tooltip")) {
    document.querySelector(".tooltip").remove();
  }
})

function setPositionTooltip(index, link, toolTip) {
  const linkPos = link.getBoundingClientRect();
  const toolTipPos = toolTip.getBoundingClientRect();

  switch (position[index]) {
    case "top":
      toolTip.style.top = (linkPos.top - toolTipPos.height) + "px";
      toolTip.style.left = linkPos.left + "px";
      break;
    case "left":
      toolTip.style.left = (linkPos.left - toolTipPos.width) + "px";
      toolTip.style.top = linkPos.top + "px";
      break;
    case "right":
      toolTip.style.left = linkPos.right + "px";
      toolTip.style.top = linkPos.top + "px";
      break;
    case "bottom":
      toolTip.style.top = linkPos.bottom + "px";
      toolTip.style.left = linkPos.left + "px";
      break;
  }
}