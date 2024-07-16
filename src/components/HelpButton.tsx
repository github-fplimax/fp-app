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
      description: "App ini berfungsi untuk mengelola izin dan tanda tangan untuk Memo",
    },
  },
  {
    element: ".archives",
    popover: {
      title: "Management Archives",
      description: "App ini berfungsi untuk mengelola setiap inventory yang ada",
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
      style={{ cursor: "pointer", backgroundColor: "#FF7F3E", color: "white" }}
      onClick={handleStartTour}
    >
      Bantuan
    </button>
  );
};
