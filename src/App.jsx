import "../public/styles/App.css";
import { MyRoutes } from "./routers/Routes";

function App() {
  return (
    <div>
      <header>
        <h1 className="title"> 🎬PELÍCULAS.ZAM </h1>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
