import './Toggle.scss';

const Toggle = () => {
  return (
    <div className="toggle">
      <span className="toggle__month">Monthly</span>
      <label class="toogle__switch switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <span className="toggle__month">Yearly</span>
    </div>
  );
};

export default Toggle;
