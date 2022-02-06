import PropTypes from 'prop-types';
import './card.css';

const Card = (props) => {
    const {
        tagTop,
        tagBottom,
        badge,
        title,
        subtitle,
        detail,
        actions
    } = props;
    return (
        <>
            <div className='card'>
                <div className='header'>
                    {
                        tagTop !== "" && badge !== 0 && (
                            <div className='tag_top'>
                                {tagTop && (<p className='tag'>{tagTop}</p>)}
                                {badge && (<p className='badge'>{badge}</p>)}
                            </div>

                        )
                    }
                    <div className='title_section'>
                        <h1>{title}</h1>
                        <h4>{subtitle}</h4>
                    </div>
                </div>
                <div className='footer'>
                    <div className='detail'>{detail}</div>
                    <div className='tag_bottom'>
                        {tagBottom && (<p className='tag'>{tagBottom}</p>)}
                        {
                            actions.map(action => action)
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

Card.propTypes = {
    tagTop: PropTypes.string,
    tagBottom: PropTypes.string,
    badge: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    detail: PropTypes.node,
    actions: PropTypes.array
};

Card.defaultProps = {
    tagTop: "",
    tagBottom: "",
    badge: 0,
    title: "",
    subtitle: "",
    detail: null,
    actions: []
};

export default Card;