function onChange() {
  const password = document.querySelector("input[id=password]");
  const confirm = document.querySelector("input[id=match]");
  if (confirm.value === password.value) {
    confirm.setCustomValidity("");
  } else {
    confirm.setCustomValidity("Passwords do not match.");
  }
}
