import React from "react";

export default function QuadSolver({
  first,
  second,
  third,
  form,
  firstSolution,
  secondSolution,
  thirdSolution,
  fourthSolution,
  fifthSolution,
  sixthSolution,
}) {
  const handleQuad = () => {
    const changeSign = -1 * second;
    const formular = `${changeSign} ±√${second}² - 4(${first} x ${third})/2(${first})`;
    form(formular);
    const square = second * second;
    const multiplied = first * third;
    const firstComplied = `${changeSign} ±√${square} - 4(${multiplied})/2(${first})`;
    firstSolution(firstComplied);
    const secondMultiplied = 4 * multiplied;
    const thirdMultiplied = 2 * first;
    const subtraction = square - secondMultiplied;
    const secondComplied = `${changeSign} ±√${subtraction}/${thirdMultiplied}`;
    secondSolution(secondComplied);
    const split = `${changeSign} +√${subtraction}/${thirdMultiplied} or ${changeSign} -√${subtraction}/${thirdMultiplied}`;
    thirdSolution(split);
    const squared = Math.floor(Math.sqrt(subtraction));
    const split2 = `${changeSign} +${squared}/${thirdMultiplied} or ${changeSign} -${squared}/${thirdMultiplied}`;
    fourthSolution(split2);
    const firstWork = changeSign + squared;
    const secondWork = changeSign - squared;
    const split3 = `${firstWork}/${thirdMultiplied} or ${secondWork}/${thirdMultiplied}`;
    fifthSolution(split3);
    const thirdWork = firstWork / thirdMultiplied;
    const lastWork = secondWork / thirdMultiplied;

    const finalSplit = `${Math.floor(thirdWork)} or ${Math.floor(lastWork)}`;
    sixthSolution(finalSplit);
  };

  handleQuad();
  return <div></div>;
}
