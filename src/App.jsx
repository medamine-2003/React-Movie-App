import NavBar from "./components/NavBar";
import "./css/App.css";
import Favourites from "./pages/Favorites";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <NavBar></NavBar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favourites />}></Route>
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
