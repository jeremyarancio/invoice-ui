import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "@/pages/Invoices";
import Clients from "@/pages/Clients";
import SidebarLayout from "./components/SidebarLayout";
import AddInvoice from "@/pages/AddInvoice";

function App() {
    return (
        <>
            <BrowserRouter>
                <SidebarLayout>
                    <Routes>
                        <Route path="/invoices" element={<Invoices />} />
                        <Route path="/invoices/add" element={<AddInvoice />} />
                        <Route path="/clients" element={<Clients />} />
                    </Routes>
                </SidebarLayout>
            </BrowserRouter>
        </>
    );
}

export default App;
