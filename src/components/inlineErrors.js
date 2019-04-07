import React from 'react'
import PropTypes from 'prop-types';


const inlineErrors = props => {
    return (
        <div className='inlineError'>
            {props.message}
        </div>
    )
}

inlineErrors.propTypes = {
    message: PropTypes.string.isRequired
};

export default inlineErrors;