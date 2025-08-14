export const ComparisonTable = () => {
  const data = [
    {
      aspecto: "🏛️ Origen histórico",
      pasillo: "Surge en la época independentista, influenciado por el vals austriaco",
      bambuco: "De tradición más antigua, con raíces en la época colonial"
    },
    {
      aspecto: "🌍 Región asociada",
      pasillo: "Interior de Colombia (zona andina)",
      bambuco: "Región andina colombiana"
    },
    {
      aspecto: "🎭 Influencias",
      pasillo: "Mezcla de vals europeo y danzas criollas",
      bambuco: "Fusión de tradiciones indígenas, africanas y españolas"
    },
    {
      aspecto: "🎵 Instrumentación inicial",
      pasillo: "Piano (en salones), luego guitarra, tiple, bandola",
      bambuco: "Guitarra, tiple, flauta; en agrupaciones pequeñas (2 o 3 músicos)"
    },
    {
      aspecto: "🎶 Carácter musical",
      pasillo: "Rápido y técnico, dificultad para bailarines y músicos",
      bambuco: "Más campesino y vocal, asociado a canto e identidad regional"
    },
    {
      aspecto: "📈 Evolución cultural",
      pasillo: "Se mezcló con el bambuco, adoptando un carácter más festivo",
      bambuco: "Generó variantes como el sanjuanero; menos conocido internacionalmente"
    },
    {
      aspecto: "🎓 Proyección académica",
      pasillo: "Compositores como Pedro Morales Pino lo promovieron como música nacional",
      bambuco: "Ha sido símbolo del interior colombiano, pero con menor difusión externa"
    },
    {
      aspecto: "🎺 Presencia del trombón",
      pasillo: "Escasa en su origen; actualmente se busca reivindicarlo en arreglos sinfónicos",
      bambuco: "Tradicionalmente excluido, pero con potencial en nuevos formatos orquestales"
    }
  ];

  return (
    <div className="relative max-w-full mx-auto">
      <div className="max-w-full overflow-x-auto rounded-lg bg-white/25 dark:bg-black/25">
        <table className="w-full border-collapse border border-[#DAC6B7] rounded-lg overflow-hidden">
          <thead className="bg-[rgb(254,230,212)]">
            <tr className="bg-table-header">
              <th className="border border-[#DAC6B7] p-3 text-left font-semibold text-sm md:text-base">
                Aspecto
              </th>
              <th className="border border-[#DAC6B7] p-3 text-left font-semibold text-sm md:text-base">
                Pasillo
              </th>
              <th className="border border-[#DAC6B7] p-3 text-left font-semibold text-sm md:text-base"> 
                Bambuco
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="even:bg-table-cell transition-colors">
                <td className="border border-[#DAC6B7] p-3 font-medium text-sm lg:text-base">
                  {row.aspecto}
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