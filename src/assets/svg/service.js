import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Service = ({ color }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
            viewBox="0 0 25 24"
        >
            <Path
                fill={color}
                d="M19.5 19h-5.6v-5.6h5.6V19zm-8.4 0H5.5v-5.6h5.6V19zm8.4-8.4h-5.6V5h5.6v5.6zm-11.2 0a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6z"
            ></Path>
        </Svg>
    )
}

export { Service }