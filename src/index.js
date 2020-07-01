import moment from "moment";

import "./style.scss";

import "./js/vanilla.js";

const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");
btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});