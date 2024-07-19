import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const steps = [
  {
    element: ".koresponden",
    popover: { title: "Koresponden", description: "Halaman koresponden" },
  },
  {
    element: ".approval",
    popover: {
      title: "Approval Memo",
      description: "Web ini berfungsi untuk mengelola izin dan tanda tangan untuk Memo",
    },
  },
  {
    element: ".archives",
    popover: {
      title: "Manajemen Arsip",
      description: "Web ini berfungsi untuk mengelola setiap inventory yang ada",
    },
  },
  {
    element: ".erp",
    popover: {
      title: "ERP",
      description: "Berisi link menuju ERP FP & ERP FBI",
    },
  },
];

const handleStartTour = () => {
  const tour = driver({
    showProgress: true,
    steps,
  });
  tour.drive();
};

export const HelpButton = () => {
  return (
    <button
      style={{ cursor: "pointer", backgroundColor: "#FF7F3E", color: "white",  margin: "10px" , borderRadius: "10px"}}
      onClick={handleStartTour}
    >
      Bantuan
    </button>
  );
};
