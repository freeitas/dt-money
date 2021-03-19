import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h2>Cadastrar transação</h2>

      <input placeholder="Titulo" />
      <input placeholder="Valor" type="number" />
      <input placeholder="Categoria" />
      <button type="submit">Cadastrar</button>
    </Modal>
  );
}