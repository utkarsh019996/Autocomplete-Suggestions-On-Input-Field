let names = ["Ayla", "Jake", "Sean", "Henry", "Brad", "Stephen", "Taylor", "Timmy", "Cathy", "John", "Amanda", "Amara", "Sam", "Sandy", "Danny", "Ellen", "Camille", "Chloe", "Emily", "Nadia", "Mitchell", "Harvey", "Lucy", "Amy", "Glen", "Peter"];
let sortedNames = names.sort();

let input = document.getElementById("input");
input.addEventListener("keyup", () => {
  removeElements();
  sortedNames.forEach(i => {
    if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.setAttribute("onclick", `displayNames('${i}')`);
      listItem.innerHTML = `<b>${i.substr(0, input.value.length)}</b>${i.substr(input.value.length)}`;
      document.querySelector(".list").appendChild(listItem);
    }
  });
});

function displayNames(value) {
  input.value = value;
  removeElements();
}

function removeElements() {
  document.querySelectorAll(".list-items").forEach(item => item.remove());
}
