export function TableComponent() {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-gray-700 uppercase">
        <tr className="border-b border-gray-400">
          <th scope="col" className="px-6 py-3 ">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3 ">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-300">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">Silver</td>
          <td className="px-6 py-4 ">Laptop</td>
          <td className="px-6 py-4">$2999</td>
        </tr>
      </tbody>
    </table>
  );
}
