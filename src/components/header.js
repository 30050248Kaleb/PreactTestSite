import { h } from "preact";
import { Link } from "preact-router/match";
import usersJson from '../assets/data/users.json';

const Header = () => {
  const username = "hacker_420";
  const currentUser = usersJson.find((p) => p.username === username);
  return (
    <header>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="/">
            Preact
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" activeClassName="active" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" activeClassName="active" href={`/profile/${currentUser.username}`}>
                    Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
