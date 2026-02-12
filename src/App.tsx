import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main";
import Home from "./pages/Home";
import DeliveryZone from "./pages/DeliveryZone";
import Notfound from "./pages/404";

export function App() {
    return (<Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/delivery-zone" element={<DeliveryZone />} />
        </Route>

        <Route path="*" element={<Notfound />} />
    </Routes>);
}

export default App;