import { z } from "zod"

export const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  number: z.string().min(10, "Phone number is required"),
  date: z
    .string()
    .nonempty("Date is required")
    .refine(
      (value) => {
        const selectedDate = new Date(value)
        const today = new Date()
        return selectedDate.getTime() >= today.setHours(0, 0, 0, 0)
      },
      {
        message: "Date must be today or in the future",
      }
    ),
  time: z
    .string()
    .nonempty("Time is required")
    .refine(
      (value) => {
        const selectedTime = new Date(`1970-01-01T${value}:00`)
        const startTime = new Date("1970-01-01T17:00:00")
        const endTime = new Date("1970-01-01T22:00:00")
        return selectedTime >= startTime && selectedTime <= endTime
      },
      {
        message: "Time must be between 5:00 PM and 10:00 PM",
      }
    ),
  guests: z.coerce
    .number()
    .min(1, "Number of guests is required")
    .max(10, "Maximum 10 guests allowed"),
  occasion: z.string().nonempty("Select an occasion"),
})
