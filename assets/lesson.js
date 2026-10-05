/* Parallel Agent Orchestration — shared lesson behaviours.
   Components: quiz (immediate feedback), step checklist (persisted),
   copy-to-clipboard brief blocks. Vanilla JS, no dependencies. */

(function () {
  "use strict";

  /* ---------- Quiz: immediate feedback, retry until correct ---------- */

  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var options = quiz.querySelectorAll(".option");
    var answered = false;

    options.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (answered || btn.disabled) return;

        if (btn.dataset.correct === "true") {
          btn.classList.add("correct");
          answered = true;
          options.forEach(function (o) { o.disabled = true; });
          quiz.classList.add("answered");
        } else {
          btn.classList.add("wrong");
          btn.disabled = true;
        }
      });
    });
  });

  /* ---------- Steps: click the number to check off, persisted ---------- */

  var pageKey = "steps:" + location.pathname;
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(pageKey) || "{}"); } catch (e) {}

  document.querySelectorAll(".step").forEach(function (step, i) {
    if (saved[i]) step.classList.add("done");
    step.addEventListener("click", function (e) {
      if (e.target.closest("a, button, input, .brief")) return;
      step.classList.toggle("done");
      saved[i] = step.classList.contains("done");
      try { localStorage.setItem(pageKey, JSON.stringify(saved)); } catch (e) {}
    });
  });

  /* ---------- Copy buttons ---------- */

  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.querySelector(btn.dataset.copy);
      if (!target) return;
      var clone = target.cloneNode(true);
      clone.querySelectorAll(".copy-btn").forEach(function (b) { b.remove(); });
      var text = clone.textContent.trim();
      var done = function () {
        var old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = old; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallback(text, done); });
      } else {
        fallback(text, done);
      }
    });
  });

  function fallback(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(ta);
  }
})();
