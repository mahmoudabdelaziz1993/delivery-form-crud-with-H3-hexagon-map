import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main";
import Home from "./pages/Home";
import DeliveryZone from "./pages/DeliveryZone";
import Notfound from "./pages/404";
import CreateDeliveryZone from "./pages/create-delivery-zone";

export function App() {
    return (<Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/delivery-zone" element={<DeliveryZone />} />
            <Route path="/create-delivery-zone" element={<CreateDeliveryZone />} />
        </Route>

        <Route path="*" element={<Notfound />} />
    </Routes>);
}

export default App;