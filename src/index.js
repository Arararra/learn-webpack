import moment from "moment";
import "alpinejs";

import "./style.scss";

const getUserModule = () => import(/* webpackChunkName: "APIpengguna" */ "./common/usersAPI");

import "./js/vanilla.js";
import "./js/alpine.js";

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});