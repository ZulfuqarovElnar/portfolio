import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Home from "../components/Home";

const Routes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />
	},
	{
		path: "/home",
		element: <Home/>
	}
]);

export default Routes;