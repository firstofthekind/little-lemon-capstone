import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import BookingForm from "./BookingForm"

describe("BookingForm", () => {
  const availableTimes = ["17:00", "17:30", "18:00", "18:30", "19:00"]

  it("shows validation errors when submitting an empty form", async () => {
    const user = userEvent.setup()
    render(<BookingForm availableTimes={availableTimes} onDateChange={vi.fn()} />)

    await user.click(screen.getByRole("button", { name: /reserve a table/i }))

    expect(await screen.findByText("Name is required")).toBeInTheDocument()
    expect(await screen.findByText("Email is required")).toBeInTheDocument()
    expect(await screen.findByText("Select an occasion")).toBeInTheDocument()
  })

  it("shows confirmation modal after successful submit", async () => {
    const user = userEvent.setup()
    render(<BookingForm availableTimes={availableTimes} onDateChange={vi.fn()} />)

    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

    await user.type(screen.getByLabelText("Full Name"), "Alex Johnson")
    await user.type(screen.getByLabelText("Email"), "alex@example.com")
    await user.type(screen.getByLabelText("Phone Number"), "1234567890")
    fireEvent.change(screen.getByLabelText("Choose Date"), { target: { value: tomorrow } })
    fireEvent.change(screen.getByLabelText("Choose Time (5:00 - 10:00 PM)"), {
      target: { value: "18:00" },
    })
    fireEvent.change(screen.getByLabelText("Number of Guests"), { target: { value: "4" } })
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: "birthday" } })

    await user.click(screen.getByRole("button", { name: /reserve a table/i }))

    expect(await screen.findByText("Reservation Confirmed!", undefined, { timeout: 3000 }))
      .toBeInTheDocument()
  })

  it("notifies parent when date changes", () => {
    const onDateChange = vi.fn()
    render(<BookingForm availableTimes={availableTimes} onDateChange={onDateChange} />)

    fireEvent.change(screen.getByLabelText("Choose Date"), { target: { value: "2026-03-07" } })

    expect(onDateChange).toHaveBeenCalledWith("2026-03-07")
  })
})
