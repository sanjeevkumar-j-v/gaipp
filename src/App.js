import Overview from "./pages/Overview";
import Header from "./parts/Header";
import Navbar from "./parts/Navbar";
function App() {
  return (
    <div className="app header-default side-nav-dark">
      <Header />
      <Navbar />
      <Overview />
    </div>
  );
}

export default App;
