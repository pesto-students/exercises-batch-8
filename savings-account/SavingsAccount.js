
class SavingsAccount {
  constructor(accountNumber, email, firstName, lastName) {
    const accountNumberRegEx = /^[0-9]{6}$/;
    const firstNameRGEX = /^[a-zA-Z]{3,20}$/;
    const lastNameRGEX = /^[a-zA-Z]+$/;
    const emailRegEX = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if (!accountNumberRegEx.test(accountNumber)) {
      throw Error('Account Number must be a 6-digit number');
    }
    if (!emailRegEX.test(email)) {
      throw Error('Invalid e-mail');
    }
    if (!firstNameRGEX.test(firstName)) {
      throw Error('First name must be between 3 and 20 characters long');
    }
    if (!lastNameRGEX.test(lastName)) {
      throw Error('Last name must contain english alphabets only');
    }

    return {
      _accountNumber: accountNumber,
      _email: email,
      _firstName: firstName,
      _lastName: lastName,
      products: [],
    };
  }
}


export {
  SavingsAccount,
};
