import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.filter}>
      <p className={s.title}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name here..."
        className={s.input}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
