import './Control.css'
const Control = ({type, name, value, checked, onChange}) => {
  return (
    <>
      <label class={type}>
        <input
          class={`${type}__input`}
          type={type}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span class={`${type}__box`}></span>
      </label>
    </>
  )
}

export default Control
