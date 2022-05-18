function validate(input) {
  let valid = true;
  let count = 0;
  let password = input.split("");

  if (input.length < 6 || input.length > 10) {
    console.log(`Password must be between 6 and 10 characters`);
    valid = false;
  }

  for (let i = 0; i < password.length; i++) {
    let element = password[i].charCodeAt();
    if (element < 48 || (element > 57 && element < 65) || (element > 90 && element < 97) || element > 122) {
      console.log("Password must consist only of letters and digits");
      valid = false;
      break;
    }
  }

  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      count++;
    }
  }

  if (count < 2) {
    console.log("Password must have at least 2 digits");
    valid = false;
  }

  if (valid) {
    console.log(`Password is valid`);
  }
}

//validate("logIn");
validate("Pa$s$s");
