import React from 'react';

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader = ({ title, description }: FormHeaderProps) => {
  return (
    <div style={{ marginBottom: 30 }}>
      <h5>{title}</h5>
      <p className="text-muted">{description}</p>
    </div>
  );
};

export default FormHeader;
