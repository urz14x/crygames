import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../container/Landing/Landing";
import COD from "../container/Topup/Lists/COD";
import FF from "../container/Topup/Lists/FF";
import ML from "../container/Topup/Lists/ML";
import PB from "../container/Topup/Lists/PB";
import Topup from "../container/Topup/Topup";
import Voucher from "../container/Voucher/Voucher";

const index: React.FC = () => {
  return (
    <Routes>
      /*Top up Route */
      <Route path="/" element={<Landing />} />
      <Route path="/topup" element={<Topup />} />
      <Route path="/topup/mobilelegends" element={<ML />} />
      <Route path="/topup/pointblank" element={<PB />} />
      <Route path="/topup/freefire" element={<FF />} />
      <Route path="/topup/callofduttymobile" element={<COD />} />
      /* VOUCHER */
      <Route path="/voucher" element={<Voucher />} />
      /* HALAMAN TIDAK DITEMUKAN */
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center min-h-screen">
            Page not found
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default index;
