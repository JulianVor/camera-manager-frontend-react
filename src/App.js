import './App.css';
import Navigation from "./components/Navigation";
import AppRouting from "./components/AppRouting";

function App() {
  return (
      <div>
          <Navigation></Navigation>
          <main className="container-fluid">
              <AppRouting></AppRouting>
          </main>
      </div>
);
}

export default App;
