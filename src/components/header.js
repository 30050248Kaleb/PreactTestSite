import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<header>
		<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand" href="#">Preact</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link" activeClassName="active" href="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" activeClassName="active" href="/profile">Me</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" activeClassName="active" href="/profile/john">John</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
	</header>
);

export default Header;
