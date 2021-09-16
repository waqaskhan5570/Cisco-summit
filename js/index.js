function handleSubmit() {
  const name = document.getElementById("fullname").value;

  localStorage.setItem("NAME", name);

  return;
}
