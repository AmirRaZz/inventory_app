import NavBar from "./components/NavBar";
import Category from "./components/Category";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar />
      <div className="container max-w-xl mx-auto p-4">
        <Category />
      </div>
    </div>
  );
}

export default App;
