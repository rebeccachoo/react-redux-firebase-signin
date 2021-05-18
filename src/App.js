import React, { Component } from "react";
import Signin from "./containers/Singin";

class App extends Component {
	state = { a: 1 };
	render() {
		return (
			<div className="App">
				<h1>Here is a sign up app </h1>
				<Signin />
			</div>
		);
	}
}

export default App;
