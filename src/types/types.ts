import type { LucideIcon } from "lucide-react"
import { z } from "zod"
import type { bookingSchema } from "../schema/booking"
import type { ReactNode } from "react"

export type HighlightsCard = {
  id: number
  image: string
  title: string
  price: string
  description: string
  order: string
  icon: LucideIcon
}

export type TestimonialsCard = {
  id: number
  image: string
  name: string
  message: string
}

export type BookingFormInput = z.input<typeof bookingSchema>
export type BookingFormData = z.output<typeof bookingSchema>

export type ModalProps = {
  children: ReactNode
  onClose: () => void
}
