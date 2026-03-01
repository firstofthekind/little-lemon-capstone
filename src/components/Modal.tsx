import type { ModalProps } from "../types/types"
import { useEffect, useRef } from "react"

const Modal = ({ children, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocusedElement = document.activeElement as HTMLElement | null
    if (!dialog) return

    const getFocusableElements = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled"))

    const focusableElements = getFocusableElements()
    const firstFocusable = focusableElements[0]
    firstFocusable?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== "Tab") return
      const currentFocusableElements = getFocusableElements()
      if (currentFocusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const first = currentFocusableElements[0]
      const last = currentFocusableElements[currentFocusableElements.length - 1]
      const activeElement = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (activeElement === first || !dialog.contains(activeElement)) {
          event.preventDefault()
          last.focus()
        }
      } else if (activeElement === last || !dialog.contains(activeElement)) {
        event.preventDefault()
        first.focus()
      }
    }

    dialog.addEventListener("keydown", handleKeyDown)

    return () => {
      dialog.removeEventListener("keydown", handleKeyDown)
      previousFocusedElement?.focus()
    }
  }, [onClose])

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content text-center p-4" ref={dialogRef} tabIndex={-1}>
          <div className="modal-body">
            {children}
            <button
              type="button"
              className="btn btn-primary px-4 mt-3"
              onClick={onClose}
              aria-label="Close confirmation modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
