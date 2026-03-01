import { Restaurant } from "../assets"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookingSchema } from "../schema/booking"
import type { BookingFormData, BookingFormInput } from "../types/types"
import Modal from "./Modal"
import { CircleCheckBig } from "lucide-react"
import { useState } from "react"

const mockReservationRequest = async (data: BookingFormData) => {
  void data
  await new Promise((resolve) => setTimeout(resolve, 800))
  return { status: 200 as const }
}

const BookingForm = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormInput, undefined, BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    setLoading(true)
    try {
      const response = await mockReservationRequest(data)
      if (response.status === 200) {
        setShowModal(true)
        reset()
      } else {
        alert("Failed to reserve your table. Please try again later.")
      }
    } catch (error) {
      console.error("Error processing reservation request:", error)
      alert("An error occurred while reserving your table. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-6 bg-light">
      <div className="container">
        <div>
          <img
            src={Restaurant}
            alt="restaurant"
            height="200px"
            className="object-fit-cover rounded-4 w-100"
            loading="lazy"
          />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-black">Book Your Table Now</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="booking_form mx-auto">
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
              <p id="name-error" role={errors.name ? "alert" : undefined}>
                {errors.name?.message}
              </p>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              <p id="email-error" role={errors.email ? "alert" : undefined}>
                {errors.email?.message}
              </p>
            </div>
            <div>
              <label htmlFor="number">Phone Number</label>
              <input
                id="number"
                type="tel"
                aria-invalid={Boolean(errors.number)}
                aria-describedby={errors.number ? "number-error" : undefined}
                {...register("number")}
              />
              <p id="number-error" role={errors.number ? "alert" : undefined}>
                {errors.number?.message}
              </p>
            </div>
            <div>
              <label htmlFor="date">Choose Date</label>
              <input
                id="date"
                type="date"
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? "date-error" : undefined}
                {...register("date")}
              />
              <p id="date-error" role={errors.date ? "alert" : undefined}>
                {errors.date?.message}
              </p>
            </div>
            <div>
              <label htmlFor="time">Choose Time (5:00 - 10:00 PM)</label>
              <input
                id="time"
                type="time"
                aria-invalid={Boolean(errors.time)}
                aria-describedby={errors.time ? "time-error" : undefined}
                {...register("time")}
              />
              <p id="time-error" role={errors.time ? "alert" : undefined}>
                {errors.time?.message}
              </p>
            </div>
            <div>
              <label htmlFor="guests">Number of Guests</label>
              <input
                id="guests"
                type="number"
                aria-invalid={Boolean(errors.guests)}
                aria-describedby={errors.guests ? "guests-error" : undefined}
                {...register("guests")}
              />
              <p id="guests-error" role={errors.guests ? "alert" : undefined}>
                {errors.guests?.message}
              </p>
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                aria-invalid={Boolean(errors.occasion)}
                aria-describedby={errors.occasion ? "occasion-error" : undefined}
                {...register("occasion")}
              >
                <option value="">Select an Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
              <p id="occasion-error" role={errors.occasion ? "alert" : undefined}>
                {errors.occasion?.message}
              </p>
            </div>
            <div className="align-items-center mt-4">
              <button
                type="submit"
                className="btn btn-dark px-4 me-md-2 rounded-4"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      aria-hidden="true"
                      role="status"
                    ></span>
                    <span role="status"> Reserving ...</span>
                  </>
                ) : (
                  "Reserve a Table"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mpodal */}
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false)
          }}
        >
          <div className="mb-3 text-primary">
            <CircleCheckBig size={80} />
          </div>
          <h5 id="reservation-modal-title" className="modal-title mb-1 fw-bold">
            Reservation Confirmed!
          </h5>
          <p>Your reservation has been confirmed. Check your email for details.</p>
        </Modal>
      )}
    </section>
  )
}

export default BookingForm
