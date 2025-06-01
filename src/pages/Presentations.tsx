import PresentationSelect from "@/components/PresentationSelect"
import PresentationTable from "@/components/PresentationTable"
import { ages } from "@/constants/constants"
import { useEffect, useState } from "react"
import { ArrowBigLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import PreviousTrigger from "@/components/PreviousTrigger"
import { ageWiseData, titles } from "@/constants/constants"
import NextTrigger from "@/components/NextTrigger"
import { motion } from "motion/react"

function Presentations() {
  const navigate = useNavigate()

  const [selectedAge, setSelectedAge] = useState<string>('All')
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [isPreviousVisible, setIsPreviousVisible] = useState<boolean>(false)
  const [isNextVisible, setIsNextVisible] = useState<boolean>(false)

  useEffect(() => {
    console.log(selectedAge);
    const index = ages.indexOf(selectedAge)
    setCurrentIndex(index)
  }, [selectedAge, setSelectedAge])


  const filteredAgeWiseData = (selectedAge === '' || selectedAge === 'All') ? ageWiseData : (
    ageWiseData.filter((element) => element.age === selectedAge)
  )


  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="gap-6 text-black p-10 w-screen flex flex-col items-center"
    >
      <button onClick={() => navigate('/')} className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 text-white cursor-pointer z-10">
        <ArrowBigLeft />
      </button>

      <h1 className="lg:text-4xl text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        List of Presentations
      </h1>


      <PresentationSelect selectedAge={selectedAge} setSelectedAge={setSelectedAge} setIsPreviousVisible={setIsPreviousVisible} setIsNextVisible={setIsNextVisible} />

      {selectedAge !== 'All' && <PreviousTrigger currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setSelectedAge={setSelectedAge} isPreviousVisible={isPreviousVisible} setIsPreviousVisible={setIsPreviousVisible} isNextVisible={isNextVisible} setIsNextVisible={setIsNextVisible} />}

      <PresentationTable filteredAgeWiseData={filteredAgeWiseData} />

      {selectedAge !== 'All' && <NextTrigger currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setSelectedAge={setSelectedAge} isPreviousVisible={isPreviousVisible} setIsPreviousVisible={setIsPreviousVisible} isNextVisible={isNextVisible} setIsNextVisible={setIsNextVisible} />}

    </motion.div>
  )
}

export default Presentations
