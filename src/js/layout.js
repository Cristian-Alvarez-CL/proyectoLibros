import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import AgregarLibro from "./views/agregarLibro";
import EliminarPublicacion from "./views/eliminarPublicacion";
import ModificarLibro from "./views/modificarLibro";
import HomePrivate from "./views/homePrivate";
import injectStore from "./store/appContext";
import "../styles/index.css";
import login from "./views/login";
import createAccount from "./views/createAccount";
import passwordRecover from "./views/passwordRecover";
import userEdit from "./views/userEdit";

export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/detail/:id" name="detail" component={Home} />
						<Route exact path="/planet_detail/:id" name="detail" component={Home} />
						<Route exact path="/agregarLibro" component={AgregarLibro} />
						<Route exact path="/eliminarPublicacion" component={EliminarPublicacion} />
						<Route exact path="/modificarLibro" component={ModificarLibro} />
						<Route exact path="/login" component={login} ></Route>
						<Route exact path="/homePrivate" component={HomePrivate} ></Route>
						<Route exact path="/create" component={createAccount} ></Route>
						<Route exact path="/useredit" component={userEdit} ></Route>
						<Route exact path="/passwordrecover" component={passwordRecover} ></Route>
						<Route render={() => <h1>Not found!</h1>} ></Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectStore(Layout);