export default function PortfolioSummary() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Portfolio Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-gray-600">Total Value</p>
          <h3 className="text-2xl font-bold text-blue-600">
            $12.4M
          </h3>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-gray-600">Growth</p>
          <h3 className="text-2xl font-bold text-green-600">
            +15.2%
          </h3>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-gray-600">Clients</p>
          <h3 className="text-2xl font-bold text-purple-600">
            248
          </h3>
        </div>
      </div>
    </div>
  );
}