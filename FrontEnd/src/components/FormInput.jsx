/**
 * FORM INPUT COMPONENT
 * ====================
 * Reusable input field component for forms
 * Reduces code duplication across multiple forms
 */

export default function FormInput({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  name 
}) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
