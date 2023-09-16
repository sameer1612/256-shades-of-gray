import { useState } from "react";
import "./App.scss";
import CanvasComponent from "./components/canvas";
import { FormComponent } from "./components/form";
import Header from "./components/header/header";

function App() {
  const size = window.innerWidth > 600 ? 512 : 256;
  const [formula, setFormula] = useState("x * y");

  const createCanvas = (size: number, formula: string) => {
    return <CanvasComponent formula={formula} size={size} />;
  };

  return (
    <>
      <Header />
      <div className="container mt-3">
        <FormComponent setFormula={setFormula} />
        <div className="border-start border-3 border-warning ps-2 d-flex align-items-baseline">
          <small>Sample equations:</small>
          <span className="badge text-bg-light mx-1">x + y</span>
          <span className="badge text-bg-light mx-1">x * y</span>
          <span className="badge text-bg-light mx-1">x ^ y</span>
        </div>
        <div className="text-center my-4">{createCanvas(size, formula)}</div>
      </div>
    </>
  );
}

export default App;
