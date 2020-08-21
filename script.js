let age = document.querySelector('#age');

function showUser (surname, name) {
    alert("User " + surname + " " + name + ", your age " + this.value);
}

showUser.call(age, 'Zubenko', 'Ann');