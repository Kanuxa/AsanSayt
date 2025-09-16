import { useState } from "react";

export default function Calculator() {
  const [pages, setPages] = useState(1);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => setPrice(pages * 50);

  return (
    <section id="calculator" className="py-24 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Project Calculator</h2>
      <div className="flex flex-col items-center gap-4">
        <input
          type="number"
          min="1"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          className="border p-2 rounded w-32 text-center"
        />
        <button
          onClick={calculatePrice}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Calculate
        </button>
        {price > 0 && <p className="text-xl mt-4">Estimated Price: ${price}</p>}
      </div>
    </section>
  );
}
