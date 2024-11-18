import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header>
        <Header />
        <hr className="mt-12" />
      </header>
      <main>
        <Blogs />
      </main>
    </>
  );
}

export default App;
