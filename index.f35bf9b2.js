document.querySelectorAll("li").forEach(function(e){var t=e.firstChild,r=document.createElement("span");r.textContent=t.textContent,t.replaceWith(r)}),document.querySelector(".tree").addEventListener("click",function(e){var t=e.target.closest("li").querySelector("ul");t.hasAttribute("hidden")?t.removeAttribute("hidden"):t.setAttribute("hidden",!0)});
//# sourceMappingURL=index.f35bf9b2.js.map
