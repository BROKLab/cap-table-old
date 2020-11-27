import React, { useState } from 'react';
import { Box, Button, Layer } from 'grommet';

interface Props {
    label: string
    buttonSize?: "small" | "medium" | "large"
}

export const Modal: React.FC<Props> = ({ buttonSize = "medium", ...props }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button size={buttonSize} label={props.label} onClick={() => setShow(!show)}></Button>
            {show &&
                <Layer
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                    animation="slide"
                    modal
                    position="center"
                >
                    <Box margin="medium" align="center" gap="small" >
                        {props.children}
                        <Button label="Lukk" onClick={() => setShow(false)} />
                    </Box>
                </Layer>
            }
        </>
    )
}