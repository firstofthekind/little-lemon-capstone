import type { ModalProps } from "../types/types"

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content text-center p-4">
          <div className="modal-body">
            {children}
            <button
              type="button"
              className="btn btn-primary px-4 mt-3"
              onClick={onClose}
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
