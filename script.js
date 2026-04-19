function createInput(placeholder, field) {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.dataset.field = field;
  return input;
}
function creatDiv() {
  const div = document.createElement("div");
  return div;
}
const data = [{ name: "", email: "" }];

const form = document.getElementById("form");
form.addEventListener("input", (e) => {
  const parent = e.target.closest(".parent");
  if (!parent) return;
  const index = parent.dataset.index;
  const field = e.target.dataset.field;
  data[index][field] = e.target.value.trim();

  const container = document.getElementById("exp");
  container.innerHTML = "";
  data.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "expDisplay";
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    div.appendChild(h2).textContent = entry.name;
    div.appendChild(p).textContent = entry.email;
    container.appendChild(div);
  });
});

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const inputBox = document.getElementById("form");
  data.push({ name: "", email: "" });
  const index = data.length - 1;

  const div = creatDiv();
  div.className = "parent";
  div.dataset.index = index;

  const nameInput = createInput("Ex: John Smith", "name");
  nameInput.className = "input";
  nameInput.id = "name"

  const emailInput = createInput("example@mail.com", "email");
  emailInput.className = "input";
  emailInput.type = "email";
  emailInput.id = "email"

  div.appendChild(nameInput);
  div.appendChild(emailInput);
  inputBox.appendChild(div);
  console.log(div.className);
});
