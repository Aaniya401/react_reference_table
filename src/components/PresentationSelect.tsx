import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { ages } from "../constants/constants"
import { RefreshCwIcon } from "lucide-react"

function PresentationSelect({selectedAge, setSelectedAge, setIsPreviousVisible, setIsNextVisible}) {
    const handleChange = (value:string) => {
        setSelectedAge(value)
        setIsNextVisible(false)
        setIsPreviousVisible(false)
    }

    const handleRefreshClick = () => {
        setSelectedAge(selectedAge)
        setIsNextVisible(false)
        setIsPreviousVisible(false)
    }

    return (
        <div className="flex gap-4">
            <Select value={selectedAge} onValueChange={handleChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Age Group" />
                </SelectTrigger>
                <SelectContent className="bg-gray-950 text-white">
                    {ages.map((element) => (<SelectItem value={element}>{element}</SelectItem>))}
                </SelectContent>
            </Select>
            {selectedAge !== 'All' && <button onClick={handleRefreshClick} className="text-gray-500 cursor-pointer">
                <RefreshCwIcon />
            </button>}
        </div>
    )
}

export default PresentationSelect