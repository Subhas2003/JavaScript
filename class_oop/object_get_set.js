const User = {
  _email: "s@.com",
  _password: "M2003",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
