import { useState } from "react";
import { initiateFlow } from "../../api/geral";
import { PrimaryButton } from "../../components/Button";
import { InitiateForm } from "../../components/InitiateForm";



export const GeralPage: React.FC = () => {
const [showModal, setShowModal] = useState(false);

const fields = [
  { name: 'queries', label: 'Queries', type: 'text' },
  { name: 'message', label: 'Message', type: 'text' },
];
  return (
    <div>
        <PrimaryButton type="button" text="Iniciar novo flow" onClick={() => setShowModal(true)} />
        <InitiateForm 
        showModal={showModal}
        setShowModal={setShowModal}
        fields={fields}
        onSubmit={() => console.log('toma rapaz, toma toma toma')}
        />
    </div>
  );
};
