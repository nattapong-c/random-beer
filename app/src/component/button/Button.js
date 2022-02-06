import PropTypes from 'prop-types';
import './button.css';
const Button = (props) => {
    const { onClick, children, primary, disabled, style } = props;
    return (
        <button disabled={disabled} style={style} className={`button ${primary ? 'primary' : ''}`} onClick={onClick}>{children}</button>
    )
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.object
};

Button.defaultProps = {
    children: null,
    onClick: null,
    primary: false,
    disabled: false,
    style: {}
};
export default Button;