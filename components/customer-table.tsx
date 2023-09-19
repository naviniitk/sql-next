import { Customer } from "@/types";

const CustomerTable = ({customers}: {customers: Customer[]}) => {
  if (!customers || customers.length === 0) {
    return <div></div>;
  }

  const headers = Object.keys(customers[0]);

  return (
    <table>
      <thead className="bg-slate-300 sticky top-0 p-2">
        <tr className="h-fit">
          {headers.map((header) => (
            <th className="border-2 border-cyan-950 p-3" key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {customers.map((item, index) => (
          <tr className="h-fit" key={index}>
            {headers.map((header) => (
              <td className="border-2 border-cyan-950 p-3"  key={header}>{item[header as keyof Customer]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;
