import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ToastWithTimer({ duration }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / (duration / 100), 0));
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="p-4 bg-white rounded shadow-lg relative w-64">
      <p>🔥 Custom Toast with Timer</p>
      <div className="w-full h-1 bg-gray-200 mt-2">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        />
      </div>
    </div>
  );
}
