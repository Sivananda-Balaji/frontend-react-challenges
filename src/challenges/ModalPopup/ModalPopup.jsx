import style from "./ModalPopup.module.css";
import { useEffect, useState } from "react";

const ModalPopup = () => {
  const [btnClick, setBtnClick] = useState(true);
  const [keyPress, setKeyPress] = useState(true);
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [showBackdrop, setShowBackdrop] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    if (keyPress) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyPress]);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOverlayClick = () => {
    if (btnClick) {
      handleCloseModal();
    }
  };
  return (
    <div className={style.container}>
      <div>
        <label htmlFor="closeDialogClick">Close dialog on Outside click</label>
        <input
          type="checkbox"
          id="closeDialogClick"
          checked={btnClick}
          onChange={(e) => setBtnClick(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="closeDialogPress">Close dialog on Escape</label>
        <input
          type="checkbox"
          id="closeDialogPress"
          checked={keyPress}
          onChange={(e) => setKeyPress(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="closeIcon">Show close icon</label>
        <input
          type="checkbox"
          id="closeIcon"
          checked={showCloseIcon}
          onChange={(e) => setShowCloseIcon(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="backdropCheck">Show Backdrop</label>
        <input
          type="checkbox"
          id="backdropCheck"
          checked={showBackdrop}
          onChange={(e) => setShowBackdrop(e.target.checked)}
        />
      </div>
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
      </div>

      {showModal && (
        <div
          className={`${style.overlay} ${showBackdrop ? style.backdropBackground : ""}`}
          onClick={handleOverlayClick}
        >
          <div className={style.modalContainer}>
            <div className={style.modalHeader}>
              <h2>Modal Heading</h2>
              {showCloseIcon && <button onClick={handleCloseModal}>x</button>}
            </div>
            <div className={style.modalContent}>
              <p>
                This is modal content. You can put any content here. This has a
                groovy backdrop! You can also close this modal by clicking
                outside of it or pressing the escape key
              </p>
            </div>
            <div className={style.modalFooter}>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPopup;
