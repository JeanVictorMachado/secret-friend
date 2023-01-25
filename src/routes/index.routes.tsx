import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { SettingsPage } from "../pages/SettingsPage";
import { PrizeDraw } from "../pages/PrizeDraw";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<SettingsPage />} />
          <Route path="/sorteio" element={<PrizeDraw />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};
