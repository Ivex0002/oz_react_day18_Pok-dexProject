import { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchPokemonById } from "./RTK/thunk";
// import Main from "./pages/Main";
// import Detail from "./pages/Detail";
// import Search from "./pages/Search";
// import Favorite from "./pages/Favorite";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // lastId = 151
    // first generation
    dispatch(fetchPokemonById(151));
  }, []);

  return (
    <>
      <h1 className="title">포켓몬 도감</h1>
      <nav>
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>즐겨찾기</Link>
        <div>
          <input
            type="text"
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          />
          <span>🔍</span>
        </div>
      </nav>
      <main>
        <Suspense fallback={<div style={{ fontSize: "6rem" }}>로딩중...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
