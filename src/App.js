import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideo from "./components/RecommendedVideo";
import SearchPage from "./components/SearchPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* Header*/}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />

              {/* RecommendedVideo */}
              <RecommendedVideo />
            </div>
          }
        />
        <Route
          path={"/search/:searchTerm"}
          element={
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />

              {/* RecommendedVideo */}
              <SearchPage />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
