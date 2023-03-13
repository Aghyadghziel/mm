import Data from "./data";
import Nav from "./nav";
import Main from "./main";

function App() {
  const cards = Data.map((item) => {
    return <Main {...item} />;
  });

  return (
    <div className="App">
      <Nav />
      <div className="cards">{cards}</div>
    </div>
  );
}

export default App;
