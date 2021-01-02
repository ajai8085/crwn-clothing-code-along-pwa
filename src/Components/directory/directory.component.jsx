import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirecotorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ dir }) => (
  <div className="directory-menu">
    {dir.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  dir: selectDirecotorySections,
});

export default connect(mapStateToProps)(Directory);
