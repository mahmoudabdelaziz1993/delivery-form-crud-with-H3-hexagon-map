import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main";
import Notfound from "./pages/404";
import CreateDeliveryZone from "./pages/create-delivery-zone";
import EditDeliveryZone from "./pages/edit-delivery-zone";
import DeliveryZoneList from "./pages/DeliveryZone";

export function App() {
    return (<Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<DeliveryZoneList />} />
            <Route path="/create-delivery-zone" element={<CreateDeliveryZone />} />
            <Route path="/delivery-zone/edit/:id" element={<EditDeliveryZone />} />

        </Route>

        <Route path="*" element={<Notfound />} />
    </Routes>);
}

export default App;