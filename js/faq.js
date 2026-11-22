/* Generated with help from OpenAI Codex. Reference pattern: W3C ARIA Authoring Practices Guide, Accordion Pattern. */

// Find the FAQ buttons and the button that opens or closes all answers.
var faqButtons = document.querySelectorAll(".faq-question");
var toggleAllButton = document.querySelector(".faq-toggle-all");

// Show or hide one answer and update its button.
function setQuestionExpanded(button, expanded) {
  var answerId = button.getAttribute("aria-controls");
  var answer = document.getElementById(answerId);
  var icon = button.querySelector(".faq-icon");

  button.setAttribute("aria-expanded", expanded ? "true" : "false");
  answer.hidden = !expanded;

  if (expanded) {
    icon.textContent = "−";
  } else {
    icon.textContent = "+";
  }
}

// Check whether every answer is open and update the all button.
function updateToggleAllButton() {
  if (toggleAllButton === null) {
    return;
  }

  var allExpanded = true;
  var i;

  for (i = 0; i < faqButtons.length; i++) {
    if (faqButtons[i].getAttribute("aria-expanded") !== "true") {
      allExpanded = false;
    }
  }

  if (allExpanded) {
    toggleAllButton.textContent = "Collapse all";
    toggleAllButton.setAttribute("aria-expanded", "true");
  } else {
    toggleAllButton.textContent = "Expand all";
    toggleAllButton.setAttribute("aria-expanded", "false");
  }
}

// A question button opens or closes its own answer.
function questionButtonClicked() {
  var button = this;
  var isOpen = button.getAttribute("aria-expanded") === "true";

  setQuestionExpanded(button, !isOpen);
  updateToggleAllButton();
}

var i;
for (i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener("click", questionButtonClicked);
}

// Open every answer, then close them all the next time.
function toggleAllQuestions() {
  var expandAll = toggleAllButton.getAttribute("aria-expanded") !== "true";
  var i;

  for (i = 0; i < faqButtons.length; i++) {
    setQuestionExpanded(faqButtons[i], expandAll);
  }

  updateToggleAllButton();
}

if (toggleAllButton !== null) {
  toggleAllButton.addEventListener("click", toggleAllQuestions);
}
