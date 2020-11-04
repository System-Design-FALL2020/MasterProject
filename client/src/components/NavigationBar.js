import React from "react";

function NavigationBar() {
  return (
    <div>
      <header class="hero">
        <div id="navbar" class="navbar">
          <h1 class="logo">
            <span class="text-primary">
              <i class="fas fa-gamepad"></i> Atomic{" "}
            </span>{" "}
            Gaming
          </h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Browse">Browse</a>
              </li>
              <li>
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/Login">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>

        <main id="swup" class="transition-fade">
          <div class="content">
            <h1> Play your way</h1>
            <p> Anywhere Anytime with Anyone</p>
            <a href="#team" class="btn">
              Read More
            </a>
          </div>
        </main>
      </header>
    </div>
  );
}

export default NavigationBar;
