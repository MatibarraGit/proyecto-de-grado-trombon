interface ComparisonTableProps {  
  title: string,
  headers: {
    aspect: string,
    pasillo: string,
    bambuco: string
  },
  rows: {
    aspect: string,
    pasillo: string,
    bambuco: string
  }[]
}

export const ComparisonTable = async ({ dict }: { dict: ComparisonTableProps }) => {
  return (
    <div className="relative max-w-full mx-auto">
      <div className="max-w-full overflow-x-auto rounded-lg bg-white/25 dark:bg-black/25">
        <table className="w-full border-collapse border border-[#DAC6B7] rounded-lg overflow-hidden">
          <thead className="bg-[rgb(254,230,212)]">
            <tr className="bg-table-header">
              <th className="border border-[#DAC6B7] p-3 text-left font-semibold text-sm md:text-base">
                {dict.headers.aspect}
              </th>
              <th className="border border-[#DAC6B7] p-3 text-left font-semibold text-sm md:text-base">
                {dict.headers.pasillo}
              </th>
              <th className="border border-[#DAC6B7] p-3 text-left font-semibold text-sm md:text-base"> 
                {dict.headers.bambuco}
              </th>
            </tr>
          </thead>
          <tbody>
            {dict.rows.map((row, index) => (
              <tr key={index} className="even:bg-table-cell transition-colors">
                <td className="border border-[#DAC6B7] p-3 font-medium text-sm lg:text-base">
                  {row.aspect}
                </td>
                <td className="border border-[#DAC6B7] p-3 text-sm lg:text-base">
                  {row.pasillo}
                </td>
                <td className="border border-[#DAC6B7] p-3 text-sm lg:text-base">
                  {row.bambuco}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};