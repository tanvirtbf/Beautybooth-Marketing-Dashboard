import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <main className="flex gap-7">
      <Sidebar />
      <Navbar />
    </main>
  );
}

export default App;
