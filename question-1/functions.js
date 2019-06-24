document.addEventListener('DOMContentLoaded', () => {
  function applyParagrapStyles(e) {
    e.preventDefault();
    const para = document.getElementById('text');
    para.style.backgroundColor = 'yellow';
  }

  const btnAction = document.getElementById('jsstyle');
  btnAction.addEventListener('click', applyParagrapStyles);
});
