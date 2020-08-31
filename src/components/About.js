
import React from "react";

function About() {
  return (
    <section className="about">
      <h3>About</h3>
      <p>
        <strong>Cellular automata</strong> is a program that operates on data that is normally
        stored in a 2D grid.
      </p>
      <p>
        A very famous cellular automaton is the <strong>Game of Life</strong> - devised by the
        British mathematician John Horton Conway in 1970. It consists of a
        collection of cells which, based on a few mathematical rules, can live,
        die, or multiply during each generation (round). 
      </p>
    </section>
  );
}

export default About;