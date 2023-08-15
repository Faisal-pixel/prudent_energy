import { Route, Routes } from "react-router-dom";
import LogInPage from "./routes/log-in-page";
import BidderRoutes from "./routes/bidder/bidder_routes";
import BasicRequestorRoutes from "./routes/basic-requestor/basic-requestor-routes";
import ProcurementAdminRoutes from "./routes/procurement-admin/procurement-admin_routes";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<LogInPage />}/>
        <Route path="/bidder/*" element={<BidderRoutes />}/>
        <Route path="/basic-requestor/*" element={<BasicRequestorRoutes />}/>
        <Route path="/procurement-admin/*" element={<ProcurementAdminRoutes />}/>
      </Routes>
    </div>
  );
}

export default App;
