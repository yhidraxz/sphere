interface Field {
  name: string;
  label?: string;
  type?: string;
}

interface initiateProps {
  fields: Field[];
  onSubmit: (value: Record<string, string>) => void;
}

export const InitiateForm: React.FC<initiateProps> = ({ fields, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const values: Record<string, string> = {};

    for (const field of fields) {
      values[field.name] = formData.get(field.name) as string;
    }
    onSubmit(values);
  };

  return (
    <div>
      <h1>oi sou initiate</h1>
    </div>
  );
};
