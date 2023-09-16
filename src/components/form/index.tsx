import { useState } from "react";

interface FormComponentProps {
  setFormula: (formula: string) => void;
}

export function FormComponent(props: FormComponentProps) {
  const [formula, setFormula] = useState("x * y");

  function handleSubmit() {
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
      <small className="text-muted mt-2">Relation between x and y</small>
      <div className="d-flex mx-auto mb-4">
        <input
          type="text"
          name="formula"
          className="form-control"
          placeholder="Relation between x and y"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
        />
        <button
          className="btn btn-outline-info text-nowrap ms-2"
          onClick={handleSubmit}
        >
          Generate Image
        </button>
      </div>
    </>
  );
}
