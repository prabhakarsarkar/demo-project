import React from 'react'
import { APP_NAME } from '../utils/config'

const Img = (props) => {
    return (
        <React.Fragment>
            <img
                alt={APP_NAME}
                {...props}
                />
        </React.Fragment>
    )
}

export default Img
