'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const textNode = Array.from(li.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    textNode.replaceWith(span);
  }
});

document.querySelector('.tree').addEventListener('click', function (e) {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.closest('li');
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  }
});
