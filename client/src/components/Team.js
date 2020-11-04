import React from "react";

function Team() {
  return (
    <div>
      <main id="swup" class="transition-fade">
        <section class="card-container">
          <div class="our-team">
            <b>OurTeam</b>
          </div>

          <div class="card-grid">
            <a href="/Home" class="card">
              <div
                class="card-background"
                styles="background-image: url(./Alfred.jpg);"
              ></div>
              <span class="card-content">
                <h3 class="card-heading">Alfred Ortiz</h3>
                <p class="card-description">Software Developer</p>
              </span>
            </a>
            <a href="/Home" class="card">
              <div
                class="card-background"
                styles="background-image: url(./John.jpg);"
              ></div>
              <span class="card-content">
                <h3 class="card-heading">John Gustafson</h3>
                <p class="card-description">Software Developer</p>
              </span>
            </a>
            <a href="/Home" class="card">
              <div
                class="card-background"
                styles="background-image: url(./Craig.jpg);"
              ></div>
              <span class="card-content">
                <h3 class="card-heading">Craig</h3>
                <p class="card-description">Information Systems</p>
              </span>
            </a>
            <a href="/Home" class="card">
              <div
                class="card-background"
                styles={"background-image: url(Johnathan.jpg);"}
              ></div>
              <span class="card-content">
                <h3 class="card-heading">Johnathan</h3>
                <p class="card-description">Software Developer</p>
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Team;
