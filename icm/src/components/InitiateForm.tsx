import { PrimaryButton } from "./Button";
import { Input } from "./Input";
import { Modal } from "./modal";
import React from "react";

interface Field {
  name: string;
  label?: string;
  type?: string;
  pattern?: RegExp;
}

interface initiateProps {
  fields: Field[];
  onSubmit: (value: Record<string, string>) => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalForm: React.FC<initiateProps> = ({
  fields,
  onSubmit,
  showModal,
  setShowModal,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const values: Record<string, string> = {};

    for (const field of fields) {
      values[field.name] = formData.get(field.name) as string;
    }

    setShowModal(false);
    onSubmit(values);
  };

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Input name={field.name} label={field.label} type={field.type} />
        ))}
        <PrimaryButton type="submit" text="iniciar novo flow" />
      </form>
    </Modal>
  );
};
