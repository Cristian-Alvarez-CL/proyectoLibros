import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home  from "./views/home";
import injectStore from "./store/appContext";
import "../styles/index.css";


export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/detail/:id" name="detail" component={Home} />
							<Route exact path="/planet_detail/:id" name="detail" component={Home} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectStore(Layout);