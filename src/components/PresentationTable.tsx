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
        <div className="lg:w-3/4 w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        {titles.map((element) => (<TableHead className="w-[100px] text-[17px] border-3">
                            {element.name}
                        </TableHead>))}
                    </TableRow>
                </TableHeader>
                <TableBody className="text-[17px] border-3">
                    {filteredAgeWiseData.length === 0 ? <h1 className="p-2 text-nowrap">No data available</h1> : filteredAgeWiseData.map((element) => (<TableRow>
                        <TableCell className="font-medium border-2">
                            {element.age}
                        </TableCell>

                        <TableCell className="border-2">
                            <ul>
                                {element.data1.length === 0 ? 'No Data Available' : element.data1.map((item) => (<li>{item}</li>))}
                            </ul>
                        </TableCell>

                        <TableCell className="border-2">
                            <ul>
                                {element.data2.length === 0 ? 'No Data Available' : element.data2.map((item) => (<li>{item}</li>))}
                            </ul>
                        </TableCell>

                        <TableCell className="border-2">
                            <ul>
                                {element.data3.length === 0 ? 'No Data Available' : element.data3.map((item) => (<li>{item}</li>))}
                            </ul>
                        </TableCell>

                        <TableCell className="border-2">
                            <ul>
                                {element.data4.length === 0 ? 'No Data Available' : element.data4.map((item) => (<li>{item}</li>))}
                            </ul>
                        </TableCell>

                        <TableCell className="border-2">
                            <ul>
                                {element.data5.length === 0 ? 'No Data Available' : element.data5.map((item) => (<li>{item}</li>))}
                            </ul>
                        </TableCell>

                    </TableRow>))}
                </TableBody>
            </Table>

        </div>
    )
}

export default PresentationTable
