import classes from "./../modals/FormModal.module.css";
function FormModal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>{children} </dialog>
    </>
  );
}
export default FormModal;
