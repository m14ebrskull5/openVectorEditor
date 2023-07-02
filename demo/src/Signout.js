import serverAddress from "./EditorDemo/serveraddress";
export default () => {
  fetch(serverAddress + "/logout", {
    redirect: "manual"
  }).catch(() => {
    window.location.href = "/#/login";
  });
  return "loading";
};
