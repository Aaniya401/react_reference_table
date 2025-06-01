import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { titles } from "@/constants/constants"

function PresentationTable({ filteredAgeWiseData }) {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-full table-auto border border-gray-300 rounded-lg shadow-md">
        <TableHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
          <TableRow>
            {titles.map((element, idx) => (
              <TableHead
                key={idx}
                className="text-[16px] font-semibold text-gray-800 px-4 py-3 border-b border-gray-300"
              >
                {element.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody className="text-[15px] text-gray-700">
          {filteredAgeWiseData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                No data available
              </TableCell>
            </TableRow>
          ) : (
            filteredAgeWiseData.map((element, rowIdx) => (
              <TableRow
                key={rowIdx}
                className={`${rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"} transition duration-300 hover:bg-gray-100`}
              >
                <TableCell className="font-medium px-4 py-3 border">
                  {element.age}
                </TableCell>

                {[element.data1, element.data2, element.data3, element.data4, element.data5].map(
                  (data, i) => (
                    <TableCell key={i} className="px-4 py-3 border align-top">
                      {data.length === 0 ? (
                        <span className="italic text-gray-400">No Data Available</span>
                      ) : (
                        <ul className="list-disc list-inside space-y-1">
                          {data.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </TableCell>
                  )
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default PresentationTable
