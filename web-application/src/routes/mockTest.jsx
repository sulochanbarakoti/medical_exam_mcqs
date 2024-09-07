const MockTest = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-lg font-bold">MBBS Practice Test Questions</h1>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">
          Get our online course
        </button>
      </div>
      <div className="flex flex-col items-center p-8 bg-gray-100">
        <div className="text-center bg-white p-6 rounded-md shadow-md">
          <div className="text-lg font-semibold mb-4">Practice Test</div>
          <div className="text-xl mb-4">
            Highest Score: <span className="font-bold">0 / 141</span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            <a href="/test">Start</a>
          </button>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-lg font-semibold mb-4">Practice Summary</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Complete</th>
                <th className="p-4">Date</th>
                <th className="p-4">Test</th>
                <th className="p-4">Time</th>
                <th className="p-4">Correct</th>
                <th className="p-4">Incorrect</th>
                <th className="p-4">Unanswered</th>
                <th className="p-4">Total</th>
                <th className="p-4">Percent</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr className="text-center">
                {/* <td className="p-4">
                  <a href="#" className="text-blue-600">
                    Resume
                  </a>
                </td> */}
                <td className="p-4">8/15/2024, 3:18:07 PM</td>
                <td className="p-4">Practice Test</td>
                <td className="p-4">02:09</td>
                <td className="p-4">0</td>
                <td className="p-4">0</td>
                <td className="p-4">141</td>
                <td className="p-4">141</td>
                <td className="p-4">0%</td>
              </tr>
              {/* Repeat rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
