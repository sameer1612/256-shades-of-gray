import { useState } from "react";

interface FormComponentProps {
  setSize: (size: number) => void;
  setFormula: (formula: string) => void;
}

export function FormComponent(props: FormComponentProps) {
  const [size, setSize] = useState(window.innerWidth > 600 ? 512 : 256);
  const [formula, setFormula] = useState("x * y");

  function handleSubmit() {
    props.setSize(size);

    try {
      // @ts-ignore: Check formula validity
      const [x, y] = [0, 0];
      eval(formula);
      props.setFormula(formula.toLowerCase());
    } catch (error) {
      alert("This formula sucks! Try again.");
      setFormula("x * y");
    }
  }

  return (
    <>
      <div className="row mx-auto">
        <div className="wrapper">
          <small className="text-muted">Image size (px)</small>
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Size (px)"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
          />
          <small className="text-muted mt-2">Relation between x and y</small>
          <input
            type="text"
            name="formula"
            className="form-control mb-4"
            placeholder="Relation between x and y"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
          />
          <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleSubmit}>
              Generate Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
