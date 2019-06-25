document.addEventListener('DOMContentLoaded', () => {
  function submitNameForm(e) {
    e.preventDefault();

    const elFirstName = document.getElementById('txtFirstName');
    const elLastName = document.getElementById('txtLastName');

    const firstName = elFirstName.value;
    const lastName = elLastName.value;

    console.log(`First name is ${firstName}, last name is ${lastName}`);
  }

  const theForm = document.getElementById('formReturnNames');
  if (theForm) {
    theForm.addEventListener('submit', submitNameForm);
  }
});
