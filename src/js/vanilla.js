const getUserModule = () => import("../common/usersAPI");

const container = document.querySelector('#vanillaUserList');

getUserModule().then(({ getUsers }) => {
  getUsers().then(json => json.forEach((val, key) => {
    // console.log(val.name+', '+val.email);

    var wrapper = document.createElement('li');
    var name = document.createElement('h2');
    var email = document.createElement('p');

    name.innerText = val.name;
    email.innerText = val.email;

    wrapper.appendChild(name);
    wrapper.appendChild(email);
    container.appendChild(wrapper);
  }));
});