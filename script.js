const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));
    panels.forEach(p => p.hidden = true);
    tab.setAttribute("aria-selected", "true");
    let associatedPanel = tab.getAttribute("aria-controls");
    let panel = document.getElementById(associatedPanel);
    panel.removeAttribute("hidden");
  });
});
