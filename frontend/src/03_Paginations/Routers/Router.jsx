import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import App from "../../00_Main/App";

const routing = createBrowserRouter(

    createRoutesFromElements(
        <Route path="/" element={<App />}>


        </Route>

    )
)
export default routing