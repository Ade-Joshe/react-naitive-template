import React from 'react';
import Svg, { Path, Mask, G, Rect } from 'react-native-svg';

const SuccessTick = () => {
    return (
        <Svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M32.9996 59.4004L17.5996 44.0004L12.4663 49.1337L32.9996 69.667L76.9996 25.667L71.8663 20.5337L32.9996 59.4004Z" fill="white" />
            <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="12" y="20" width="65" height="50">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M32.9996 59.4004L17.5996 44.0004L12.4663 49.1337L32.9996 69.667L76.9996 25.667L71.8663 20.5337L32.9996 59.4004Z" fill="white" />
            </Mask>
            <G mask="url(#mask0)">
                <Rect width="88" height="88" fill="white" />
            </G>
        </Svg>

    )
}

export { SuccessTick }