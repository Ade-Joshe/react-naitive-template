import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Home = ({ color }) => {
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
                d="M19.5 22h-14a1 1 0 01-1-1v-9.586a1 1 0 01.293-.707l7-7a1 1 0 011.415 0l7 7a.994.994 0 01.292.707V21a1 1 0 01-1 1zm-9-7h4v5h4v-8.172l-6-6-6 6V20h4v-5z"
            ></Path>
        </Svg>
    );
}

export { Home };