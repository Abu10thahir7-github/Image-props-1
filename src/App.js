import "./App.css";
import logo_1 from "./Componet/img-1.png";
import logo_2 from "./Componet/img-2.png";
import Main from "./Componet/main";
function App() {
  return (
    <div className="App">
      
      <Main 
      logo_1={logo_1} 
      logo_2={logo_2}
      />
    </div>
  );
}

export default App;
