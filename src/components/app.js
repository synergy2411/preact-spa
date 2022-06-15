import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Router } from 'preact-router';
import { createPortal } from 'preact/compat';

import Header from './header';
import Todos from './Todos';
import Users from './Users';

const divEl = document.createElement("div")
divEl.id = "app-todos"
document.body.appendChild(divEl)

const App = () => {
	const [show, setShow] = useState(false);
	return (
		<div id="app">
		<Header/>
		<hr />
		<button onClick={() => setShow(true)}>Port</button>
		{show && createPortal(<Todos />, document.getElementById("app-todos"))}
		<h2>Hellp Preact SPA</h2>
		<Router>
			<Users path="/users" />
			<Todos path="/todos"/>
		</Router>
	</div>
	)
}


export default App;
