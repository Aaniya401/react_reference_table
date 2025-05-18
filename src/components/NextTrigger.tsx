import { useEffect, useState } from 'react'
import { ages } from '@/constants/constants'
import PresentationTable from './PresentationTable'
import { ageWiseData } from '@/constants/constants'
import { ChevronDown } from 'lucide-react'

function NextTrigger({ currentIndex, setCurrentIndex, setSelectedAge, isPreviousVisible, setIsPreviousVisible,isNextVisible, setIsNextVisible }) {
    const [nextValue, setNextValue] = useState('')
    const [nextDisplayValue, setNextDisplayValue] = useState('')
  
    useEffect(() => {
      if (currentIndex !== null) {
        if (isNextVisible) {
          currentIndex + 1 <= ages.length - 1 ? setNextValue(ages[currentIndex + 1]) : ''
          currentIndex + 2 <= ages.length - 1 ?  setNextDisplayValue(ages[currentIndex + 2]) : setNextDisplayValue('No Next Groups')
        } else {
          currentIndex + 1 <= ages.length - 1 ? setNextValue(ages[currentIndex + 1]) : ''
          currentIndex + 1 <= ages.length - 1 ?  setNextDisplayValue(ages[currentIndex + 1]) : setNextDisplayValue('No Next Groups')
        }
      }
    }, [currentIndex])
  
    const handleClick = () => {
      if (nextDisplayValue === 'No Next Groups') {
        return;
      }
      
      setIsNextVisible(true)
      setIsPreviousVisible(false)
      if (nextDisplayValue === ages[currentIndex + 2]) {
        setCurrentIndex(currentIndex + 1)
        setSelectedAge(ages[currentIndex + 1])
      } else {
        currentIndex + 1 <= ages.length - 1 ?  setNextDisplayValue(ages[currentIndex + 2]) : setNextDisplayValue('No Next Groups')
      }
    }
    
    const filteredAgeWiseData = nextValue === '' ? '' : (
      ageWiseData.filter((element) => element.age === nextValue)
    )
  
    return (
      <div className='flex flex-col justify-center items-center w-full gap-6'>
        {isNextVisible && <PresentationTable filteredAgeWiseData={filteredAgeWiseData}/>}
        <button onClick={handleClick} className='text-gray-500 text-sm font-bold flex justify-center items-center gap-2 cursor-pointer'>
          {nextDisplayValue}
          <ChevronDown size={20}/>
        </button>
      </div>
    )
}

export default NextTrigger