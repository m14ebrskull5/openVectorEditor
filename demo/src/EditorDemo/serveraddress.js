let url;
if (import.meta.env.MODE === "development") {
  url = "http://localhost:8081";
} else {
  url = "http://62.234.98.190:8080/";
}
export default url;
