const useConfirm = (message, onConfirm, onCancel) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const Confirm = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default Confirm;
