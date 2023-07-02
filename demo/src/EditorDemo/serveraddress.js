let url;
if (import.meta.env.MODE === "development") {
  url = "";
} else {
  url = "http://62.234.98.190:8080/";
}
export default url;
