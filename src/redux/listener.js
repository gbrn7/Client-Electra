import store from "./store";

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  // console.log('previousAuth')
  // console.log(previousAuth)

  currentAuth = store.getState().auth;

  // console.log('currentAuth')
  // console.log(currentAuth)

  if (currentAuth !== previousAuth) {
    localStorage.setItem('auth', JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };