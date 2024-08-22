const crossBtn = document.querySelector(".cross-btn");
const gameRule = document.querySelector(".games-rule");
const ruleBtn = document.querySelector(".rules-btn");


crossBtn.addEventListener("click", () => {
    gameRule.style.visibility = "hidden";
    crossBtn.style.visibility = "hidden";
  });
  
  ruleBtn.addEventListener("click", () => {
    gameRule.style.visibility = "visible";
    crossBtn.style.visibility = "visible";
  });
  