<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap");
  @import url(//fonts.googleapis.com/css?family=Vibur);

  /* Hide scrollbar for Chrome, Safari and Opera */

  /* Hide scrollbar for IE, Edge and Firefox */
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  ul {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  h1 {
    font-weight: 300;
    line-height: 1.2;
  }

  /* Nav */

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    color: white;
    opacity: 0.8;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    padding: 0 30px;
  }

  .navbar a {
    color: white;
    padding: 10px 20px;
    margin: 0 5px;
  }

  .navbar a:hover {
    border-bottom: red 2px solid;
  }

  .navbar ul {
    /* Line it in a row */
    display: flex;
  }

  .navbar .logo {
    font-weight: 400;
  }

  @keyframes blink {
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79% {
      color: #333;
    }
    80% {
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: #333;
    }
    83% {
      color: inherit;
      text-shadow: none;
    }
    92% {
      color: #333;
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }
</style>

<div id="navbar" class="navbar">
  <h1 class="logo">
    <span class="text-primary"><i class="fas fa-gamepad" /> Atomic </span>
    Gaming
  </h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/Browse">Browse</a></li>
      <li><a href="/Login">Login</a></li>
      <li><a href="/Login">Sign Up</a></li>
    </ul>
  </nav>
</div>
