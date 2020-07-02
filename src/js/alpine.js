const getServiceModule = () => import(/* webpackChunkName: "APIlayanan" */ "../common/serviceAPI");

const userContainer = document.querySelector('#alpineUserList');

alpineRendering = () => {
  return{
    userList: [],
    postList: [],
    loop(){
      getServiceModule().then(({ getUsers,getPosts }) => {
        getUsers().then(json => this.userList = json);
        // getPosts().then(json => this.postList = json);
      });
    },
  }
}