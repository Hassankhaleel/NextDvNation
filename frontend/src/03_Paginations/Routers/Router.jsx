import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import App from "../../00_Main/App";
import Hero from "../../02-Sections/Hero/Hero";
import Navbar from "../../01_Components/Navbar/Navbar";
import Events from "../../02-Sections/Events/Events";

const routing = createBrowserRouter(

    createRoutesFromElements(

        <Route path="/" element={<Navbar />}>
            <Route index="true" element={<Hero />} />
            <Route path="/events" element={<Events />} />

        </Route>



    )
)
export default routing