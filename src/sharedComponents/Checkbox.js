export const Checkbox = ({isChecked, onChange}) => {
  return (
    <input
    className="toggle"
    type="checkbox"
    checked={isChecked}
    onChange={onChange}
  />
  )
}