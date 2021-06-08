import React from "react";
import Svg, { Path } from "react-native-svg";

function SelectedCardCheck() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path
                fill="#031A6E"
                d="M17 19H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2zM7 7v10h10V7H7zm4 8.362l-2.7-2.647 1.4-1.43 1.3 1.271 3.3-3.267 1.4 1.422-4.7 4.65v.001z"
            ></Path>
        </Svg>
    );
}

export { SelectedCardCheck };