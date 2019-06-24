document.addEventListener('DOMContentLoaded', () => {
  function displayAttributes(liLinkAttributes) {
    const displayText = `<ol>${liLinkAttributes}</ol>`;

    const elDisplay = document.getElementById('displayMessage');
    elDisplay.innerHTML = displayText;
  }

  function getAttributes(e) {
    e.preventDefault();

    const pestoLink = document.getElementById('w3r');

    let liLinkAttributes = '';
    if (pestoLink.hasAttributes()) {
      const attrs = pestoLink.attributes;
      for (let i = attrs.length - 1; i >= 0; i -= 1) {
        liLinkAttributes[attrs[i].name] = attrs[i].value;
        liLinkAttributes += `<li>Attribute: <strong>${attrs[i].name}</strong>, `;
        liLinkAttributes += `Value: <strong>${attrs[i].value}</strong></li>`;
      }
      displayAttributes(liLinkAttributes);
    }
  }

  const btnGetAttributes = document.getElementById('btnGetAttributes');
  if (btnGetAttributes) {
    btnGetAttributes.addEventListener('click', getAttributes);
  }
});
