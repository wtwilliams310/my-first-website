let username = "1odeue";
let password = "notastrongpasswor";
password = "ciuiuiuik";
let newPasswordUser =
  password.length >= 5 &&
  !password.includes(username) &&
  password.length <= 20 &&
  !username.startsWith(" ") &&
  !username.endsWith(" ") &&
  !password.startsWith(" ") &&
  !password.endsWith(" ");
newPasswordUser = !password.includes(username);

console.log(newPasswordUser);
