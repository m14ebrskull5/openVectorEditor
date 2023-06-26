import tgUseLocalStorageState from "tg-use-local-storage-state";
localStorage.setItem("showMeltingTemp", true);
localStorage.setItem("showGCContent", true);
const useMeltingTemp = () => {
  return tgUseLocalStorageState("showMeltingTemp");
};

export default useMeltingTemp;
