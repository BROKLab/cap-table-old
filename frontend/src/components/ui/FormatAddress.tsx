import React, { useState } from 'react';
import { Box, Text, Button } from 'grommet';
import Copy from "clipboard-copy";
import { Copy as CopyIcon } from 'grommet-icons';

interface Props {
  address: string
  copy?: boolean
  size?: string
}

export const FormatAddress: React.FC<Props> = ({ address, copy = true, size = "medium" }) => {
  const [color, setColor] = useState<string>("black");

  const formatAddress = () => {
    return address.substr(0, 5) +
      ".." +
      address.substr(address.length - 2, address.length)
  }
  const handleCopy = () => {
    setColor("green")
    Copy(address)
    setTimeout(() => {
      setColor("text")
    }, 300)
  }

  return (
    <Box direction="row">
      <Text size={size}>{formatAddress()}</Text>
      {copy &&
        <Button plain margin={{ left: "5px" }} alignSelf="center" icon={<CopyIcon size="15px" color={color} ></CopyIcon>} onClick={() => handleCopy()} hoverIndicator focusIndicator={false}></Button>
      }
    </Box>
  );
}