import Navbar from "../components/Navbar";
import Window from "../components/Window";
import "../styles/Reports.css";

export default function Reports() {
  return (
    <div className="min-h-screen bg-[#D9E5D6] flex justify-center py-8">

      <div className="w-[1200px] bg-[#E8E2D2] border-2 border-[#4A4A4A] rounded-md overflow-hidden">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-6">
            📑 REPORTS CENTER
          </h1>

          <div className="grid grid-cols-2 gap-6">

            <Window title="Daily Traffic Report">

              <p>
                Total Events: 42
              </p>

              <p>
                High Priority: 8
              </p>

              <p>
                Road Closures: 11
              </p>

              <button className="mt-4 border px-4 py-2">
                Download PDF
              </button>

            </Window>

            <Window title="Resource Allocation">

              <p>
                Officers Deployed: 240
              </p>

              <p>
                Barricades Used: 96
              </p>

              <p>
                Diversions Created: 18
              </p>

            </Window>

            <Window title="Recent Predictions">

              <ul>

                <li>IPL Match → High</li>

                <li>Concert → High</li>

                <li>Marathon → Medium</li>

                <li>Political Rally → High</li>

              </ul>

            </Window>

            <Window title="System Status">

              <p>
                ML Model Status: Active
              </p>

              <p>
                Backend API: Online
              </p>

              <p>
                Prediction Accuracy: 99.7%
              </p>

            </Window>

          </div>

        </div>

      </div>

    </div>
  );
}