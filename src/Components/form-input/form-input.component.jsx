import './form-input.styles.scss';

var FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input onChange={handleChange} {...otherProps}  className="form-input"/>
    {label ? (
      <label
        className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
