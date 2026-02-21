import ListIcon from "../../../assets/ListIcon";
import MapIcon from "../../../assets/MapIcon";
import classes from './ToggleListOrMap.module.css'

const ToggleListOrMap = ({ viewMode, onToggle }) => (
  <div className={`${classes['toggle-button-main-container']} d-flex justify-content-end rounded-pill`}>
    <button
      className={`d-flex align-items-center border-0 rounded-start-pill px-4 py-2 ${viewMode === 'list' ? 'bg-success text-white' : 'bg-white text-black'}`}
      onClick={onToggle}
      disabled={viewMode === 'list'}
    >
      <ListIcon />
    </button>
    <button
      className={`d-flex align-items-center border-0 rounded-end-pill px-4 py-2 ${viewMode === 'map' ? 'bg-success text-white' : 'bg-white text-black'}`}
      onClick={onToggle}
      disabled={viewMode === 'map'}
    >
      <MapIcon />
    </button>
  </div>
);

export default ToggleListOrMap;
