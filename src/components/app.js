import { h } from 'preact';
import { Router } from 'preact-router';

import '../style/index.css';

import Header from './header';
import Sidebar from './sidebar';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
	<div id="app" class="bg-light"  style="padding-top:4rem">
		<Header />
		<div class="row">
			<div class="col-2">
				<Sidebar />
			</div>
			<div class="col">
				<main class="container-fluid">
					<Router>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
				</main>
			</div>
			<div class="col-2">

			</div>
		</div>
	</div>
);

export default App;
