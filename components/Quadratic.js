import { Forum } from "next/font/google";
import { useState } from "react";
import styles from "../styles/Quad.module.css";
import QuadSolver from "./QuadSolver";

export default function Quadratic() {
  const [display, setDisplay] = useState("none");
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  //   the three states created above would collect the value of the inputs fiels, they'd then be passed as props to a logic component called QuadSolver
  const [formular, setFormular] = useState();
  const [firstComplied, setFirstComplied] = useState();
  const [secondComplied, setSecondComplied] = useState();
  const [thirdComplied, setThirdComplied] = useState();
  const [fourthComplied, setFourthComplied] = useState();
  const [fifthComplied, setFifthComplied] = useState();
  const [sixthComplied, setSixthComplied] = useState();
  // if (a && b && c == undefined) setDisplay("none");
  const run = (e) => {
    e.preventDefault();
    if (a && b && c !== undefined) setDisplay("flex");
  };
  return (
    <div className={styles.quadContainer}>
      <h1 className={styles.quadHeading}>Solve quadratic equations</h1>
      <p className={styles.quadIntroText}>
        Quadratic equations are equations made up of three parts which can be
        labeled <strong>A</strong>,<strong>B</strong> and <strong>C</strong>.
        There are three ways to solving a quadractic equation, the application
        uses one of those methods called the <strong>Formular Method</strong>.
        The quadratic formular is equal to "-b ±√b² - 4ac/2a". In an equation
        ex² ± vx ± 1 = 0, e stands as the a, v stands as x and 1 is c
      </p>
      <h2 className={styles.subHeading}>Questions</h2>
      <form className={styles.inputContainer}>
        <input
          className={styles.inputs}
          placeholder="ax²"
          required
          onChange={(e) => {
            setA(e.target.value);
          }}
          type="number"
        />
        <input
          className={styles.inputs}
          placeholder="bx"
          required
          onChange={(e) => {
            setB(e.target.value);
          }}
          type="number"
        />
        <input
          className={styles.inputs}
          placeholder="c"
          required
          onChange={(e) => {
            setC(e.target.value);
          }}
          type="number"
        />
        <button className={styles.button} onClick={run}>
          Solve
        </button>
        <QuadSolver
          first={a}
          second={b}
          third={c}
          form={setFormular}
          firstSolution={setFirstComplied}
          secondSolution={setSecondComplied}
          thirdSolution={setThirdComplied}
          fourthSolution={setFourthComplied}
          fifthSolution={setFifthComplied}
          sixthSolution={setSixthComplied}
        />
      </form>
      <p className={styles.explanatoryText}>
        Using the formular method, we substitute the values of a = {a},b={b} and
        c={c} into the quadratic formular
      </p>
      <div className={styles.solved} style={{ display: `${display}` }}>
        {" "}
        {formular} <p>{firstComplied}</p>
        <p>{secondComplied}</p>
        <p>now we split the equations into positive and negative sides</p>
        <p>{thirdComplied}</p>
        <p>{fourthComplied}</p>
        <p>{fifthComplied}</p>
        <p>{sixthComplied}</p>
        <p>The answers gotten are approximated values</p>
      </div>
    </div>
  );
}
