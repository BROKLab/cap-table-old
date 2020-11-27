import React from 'react';
import { Box } from 'grommet';
import { SpinnerDiamond } from 'spinners-react';

interface Props {
    size?: number
    color?: string
}

export const Loading: React.FC<Props> = ({ size = 30, color = "brand", ...props }) => {

    return (
        <Box>
            <SpinnerDiamond color={color} size={size}>
                {props.children}
            </SpinnerDiamond>
        </Box>
    )
}