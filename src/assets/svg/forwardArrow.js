import React from "react";
import Svg, { Path } from "react-native-svg";

function ForwardIcon({ color }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            fill="none"
            viewBox="0 0 8 14"
        >
            <Path
                fill={color ? color : "#000500"}
                d="M7.712 7L1.702.99.286 2.404l4.6 4.6-4.6 4.593 1.414 1.414L7.712 7z"
            ></Path>
        </Svg>
    );
}

export { ForwardIcon };