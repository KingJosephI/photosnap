import './Toggle.scss';

const Toggle = () => {
  return (
    <div>
      <span>Monthly</span>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <span>Yearly</span>
    </div>
  );
};

export default Toggle;
