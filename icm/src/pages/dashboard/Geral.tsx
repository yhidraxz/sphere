import { useState } from "react";
import { initiateFlow } from "../../api/geral";
import { PrimaryButton } from "../../components/Button";
import { ModalForm } from "../../components/InitiateForm";

export const GeralPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const fields = [
    {
      name: "queries",
      label: "Empresas",
      type: "text",
      placeholder: 'Empresas, E.G. "barbearias em são paulo"',
    },
    { name: "message", label: "Message", type: "text" },
  ];
  return (
    <div>
      <PrimaryButton
        type="button"
        text="+ Iniciar novo flow"
        onClick={() => setShowModal(true)}
      />
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        fields={fields}
        onSubmit={(values) => initiateFlow(values.queries, values.message)}
      />
    </div>
  );
};
