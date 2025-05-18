import { useEffect, useState } from 'react'
import { ages } from '@/constants/constants'
import PresentationTable from './PresentationTable'
import { ageWiseData } from '@/constants/constants'
import { ChevronUp } from 'lucide-react'

function PreviousTrigger({ currentIndex, setCurrentIndex, setSelectedAge, isPreviousVisible, setIsPreviousVisible, isNextVisible, setIsNextVisible }) {
  // I need two values, one which will be of the table being displayed and other which will be shown
  // When the table has not been clicked yet, the displayed value will be previous to current value
  // if the table is visible, the data that is visible in table is of previous value and the one displayed in button will be previous to the value of the data being shown
  const [previousValue, setPreviousValue] = useState('')
  const [previousDisplayValue, setPreviousDisplayValue] = useState('')

  useEffect(() => {
    if (currentIndex !== null) {
      if (isPreviousVisible) {
        // This means the button has been clicked once.
        // Since the value on 0 index is all, we will only be going till index 1
        currentIndex - 1 >= 1 ? setPreviousValue(ages[currentIndex - 1]) : ''
        currentIndex - 2 >= 1 ?  setPreviousDisplayValue(ages[currentIndex - 2]) : setPreviousDisplayValue('No Previous Groups')
      } else {
        // The button has not been clicked, so display value will be currentIndex - 1 and so will be the actual value
        currentIndex - 1 >= 1 ? setPreviousValue(ages[currentIndex - 1]) : ''
        currentIndex - 1 >= 1 ?  setPreviousDisplayValue(ages[currentIndex - 1]) : setPreviousDisplayValue('No Previous Groups')
      }
    }
  }, [currentIndex])

  const handleClick = () => {
    if (previousDisplayValue === 'No Previous Groups') {
      return;
    }
    // When the button will be clicked, the current value will be shown and display value will be currentIndex - 1
    // But if the button is being clicked again ==> we only want two tables on the screen at a time
    // We will have to change the currentIndex if previousDisplayValue is already equal to ages[currentIndex - 2]
    setIsPreviousVisible(true)
    setIsNextVisible(false)
    if (previousDisplayValue === ages[currentIndex - 2]) {
      setCurrentIndex(currentIndex - 1)
      setSelectedAge(ages[currentIndex - 1])
    } else {
      currentIndex - 1 >= 1 ?  setPreviousDisplayValue(ages[currentIndex - 2]) : setPreviousDisplayValue('No Previous Groups')
    }
  }
  
  const filteredAgeWiseData = previousValue === '' ? '' : (
    ageWiseData.filter((element) => element.age === previousValue)
  )

  return (
    <div className='flex flex-col justify-center items-center w-full gap-6'>
      <button onClick={handleClick} className='text-gray-500 text-sm font-bold flex justify-center items-center gap-2 cursor-pointer'>
        {previousDisplayValue}
        <ChevronUp size={20}/>
      </button>
      {isPreviousVisible && <PresentationTable filteredAgeWiseData={filteredAgeWiseData}/>}
    </div>
  )
}

export default PreviousTrigger