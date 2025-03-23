export function TableComponent({ field, data }) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-gray-700 uppercase">
        <tr className="border-b border-gray-400">
          {field.map((f, index) => {
            return (
              <th
                scope="col"
                className={`px-6 py-3 ${
                  index == 0 ? "text-left" : "text-right"
                }`}
              >
                {f}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((d) => {
          return (
            <tr className="border-b border-gray-300">
              {field.map((f) => {
                return f == "title" ? (
                  <td className="px-6 py-4 w-1/4 font-medium text-gray-900 whitespace-wrap">
                    {d[f]}
                  </td>
                ) : (
                  <td className="px-6 py-4 w-1/4 text-right">
                    {d[f].toLocaleString()}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
