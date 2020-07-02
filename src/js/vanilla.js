const getServiceModule = () => import(/* webpackChunkName: "APIservice" */ "../common/serviceAPI");

const userContainer = document.querySelector('#vanillaUserList');
const postContainer = document.querySelector('#vanillaPostList');

getServiceModule().then(({ getUsers,getPosts }) => {
  getUsers().then(json => json.forEach((val, key) => {
    var li = document.createElement('li');

    li.innerText = `Name: ${val.name}, Email: ${val.email}`;
    userContainer.appendChild(li);
  }));

  // getPosts().then(json => json.forEach((val, key) => {
  //   var div = document.createElement('div');
  //   var h3 = document.createElement('h3');
  //   var p = document.createElement('p');
  //   var hr = document.createElement('hr');

  //   h3.innerText = val.title;
  //   p.innerText = val.body;
  //   div.appendChild(h3);
  //   div.appendChild(p);

  //   postContainer.appendChild(div);
  //   postContainer.appendChild(hr);
  // }));
});