"use strict"

document.addEventListener("change", e => {
  getChildrensElements(e.target)
  getParentsSiblingsElements(e.target)
})

function getChildrensElements(selected) {
  let children = selected.closest(".interest").querySelectorAll(".interest__check");
  if (children) {
    children.forEach(elem => {
      elem.indeterminate = false;
      elem.checked = selected.checked;
    });
  }
}

function getParentsSiblingsElements(selected) {
  const parent = selected.closest(".interests_active")
  if (parent) {
    const sibling = parent.querySelectorAll(".interest__check");
    const firstParent = parent.closest(".interest").querySelector(".interest__check");
    const check = [...sibling].every(elem => elem.checked == selected.checked)
    if (check) {
      firstParent.checked = selected.checked;
      firstParent.indeterminate = false;
    } else {
      firstParent.checked = false;
      firstParent.indeterminate = true;
    }
    getParentsSiblingsElements(firstParent);
  }
}