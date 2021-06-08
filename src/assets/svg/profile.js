import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const Profile = ({ color }) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
            viewBox="0 0 25 24"
        >
            <G fill={color}>
                <Path d="M7.5 8a5 5 0 1110 0 5 5 0 01-10 0zm5 3a3 3 0 100-6 3 3 0 000 6zM6.843 16.343A8 8 0 004.5 22h2a6 6 0 1112 0h2a8 8 0 00-13.657-5.657z"></Path>
            </G>
        </Svg >
    )
}

export { Profile }