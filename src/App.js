import { Route, Routes } from "react-router-dom";
import LogInPage from "./routes/log-in-page";
import BidderRoutes from "./routes/bidder/bidder_routes";
import BasicRequestorRoutes from "./routes/basic-requestor/basic-requestor-routes";
import ProcurementAdminRoutes from "./routes/procurement-admin/procurement-admin_routes";
import Test from "./components/test";
import ITAdminRoutes from "./routes/it-admin/it-admin_routes";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<LogInPage />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/bidder/*" element={<BidderRoutes />}/>
        <Route path="/basic-requestor/*" element={<BasicRequestorRoutes />}/>
        <Route path="/procurement-admin/*" element={<ProcurementAdminRoutes />}/>
        <Route path="/it-admin/*" element={<ITAdminRoutes />}/>
      </Routes>
    </div>
  );
}

export default App;
