import { BookingForm } from "../../components"
import { useState } from "react"

const getAvailableTimes = (selectedDate: string): string[] => {
  const baseTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ]
  const date = new Date(selectedDate)
  if (Number.isNaN(date.getTime())) return baseTimes

  // Weekdays have slightly fewer late slots than weekends.
  const isWeekend = date.getDay() === 5 || date.getDay() === 6
  return isWeekend ? baseTimes : baseTimes.filter((time) => time <= "21:00")
}

const Reservation = () => {
  const today = new Date().toISOString().slice(0, 10)
  const [availableTimes, setAvailableTimes] = useState<string[]>(() => getAvailableTimes(today))

  const handleDateChange = (selectedDate: string) => {
    setAvailableTimes(getAvailableTimes(selectedDate))
  }

  return (
    <main>
      <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} />
    </main>
  )
}

export default Reservation
