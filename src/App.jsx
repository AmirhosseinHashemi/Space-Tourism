import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CrewProvider from "./contexts/CrewContext";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import TermProvider from "./contexts/TechContext";

function App() {
  return (
    <CrewProvider>
      <TermProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="home" replace />} />
              <Route path="home" element={<Home />} />
              <Route path="destination" element={<Destination />} />
              <Route path="crew" element={<Crew />} />
              <Route path="technology" element={<Technology />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TermProvider>
    </CrewProvider>
  );
}

export default App;
