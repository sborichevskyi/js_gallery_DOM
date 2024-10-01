var e=document.querySelector("#largeImg");document.querySelector("#thumbs").addEventListener("click",function(r){r.preventDefault();var t=r.target;if("IMG"===t.tagName){var a=t.closest("a");e.src=a.href}else"A"===t.tagName&&(e.src=t.href)});
//# sourceMappingURL=index.1f94e0c8.js.map
