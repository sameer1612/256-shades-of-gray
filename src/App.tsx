import { useState } from "react";
import "./App.scss";
import CanvasComponent from "./components/canvas";
import { FormComponent } from "./components/form";

function App() {
  const [size, setSize] = useState(window.innerWidth > 600 ? 512 : 256);
  const [formula, setFormula] = useState("x * y");

  const createCanvas = (size: number, formula: string) => {
    return <CanvasComponent formula={formula} size={size} />;
  };

  return (
    <>
      <div className="container mt-3">
        <FormComponent setSize={setSize} setFormula={setFormula} />
        <div className="text-center my-4">{createCanvas(size, formula)}</div>
      </div>
    </>
  );
}

export default App;
