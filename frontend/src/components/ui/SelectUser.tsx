import { ethers } from 'ethers';
import { Box, Text, TextInput } from 'grommet';
import { Checkmark, Close, Waypoint } from 'grommet-icons';
import { validateNorwegianIdNumber } from 'norwegian-national-id-validator';
import React, { useCallback, useEffect, useState } from 'react';
import { AuthProviderUser } from '../../utils/auth-provider';


interface Props {
    onChange: (...event: any[]) => void
    value: string,
    user?: AuthProviderUser
}

enum IDENTIFIER {
    DEFAULT,
    ADDRESS,
    UUID,
}

export const SelectUser: React.FC<Props> = ({ ...props }) => {

    const [identifier, setIdentifier] = useState(IDENTIFIER.DEFAULT);
    const [searchInput, setSearchInput] = useState(props.value);

    const setValue = useCallback((value: string) => {
        props.onChange(value)
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        const input = searchInput.toLowerCase()
        if (input.substr(0, 2) === "0x") {
            if (ethers.utils.isAddress(input)) {
                setValue(input)
                setIdentifier(IDENTIFIER.ADDRESS)
                return
            }
        }
        if (validateNorwegianIdNumber(input)) {
            setValue(input)
            setIdentifier(IDENTIFIER.UUID)
            return
        }
        setValue(input)
        return setIdentifier(IDENTIFIER.DEFAULT)

    }, [searchInput, setValue])

    const indetifierLabel = () => {
        switch (identifier) {
            case IDENTIFIER.ADDRESS: {
                return "addresse"
            }
            case IDENTIFIER.UUID: {
                return "fødselsnummer"
            }
            case IDENTIFIER.DEFAULT: {
                return "ukjent"
            }
        }
    }


    return (
        <Box gap="small">
            <TextInput size="small" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
            <Box gap="small">
                {props.user &&
                    <Text size="xsmall"><Checkmark size="small" color="green" style={{ marginRight: "5px", paddingTop: "3px" }}></Checkmark>Din bruker kan utstede til fødselsnummer.</Text>
                }
                {!props.user &&
                    <Text size="xsmall"><Close size="small" color="red" style={{ marginRight: "5px", paddingTop: "3px" }}></Close>Din bruker kan IKKE utstede til fødselsnummer.</Text>
                }
                {IDENTIFIER.DEFAULT === identifier &&
                    <Text size="xsmall"><Waypoint size="small" color="red" style={{ marginRight: "5px", paddingTop: "3px" }}></Waypoint>Ukjent indentifisering, vennligst tast {props.user ? "fødselsnummer eller " : ""}Ethereum addresse.</Text>
                }
                {IDENTIFIER.DEFAULT !== identifier &&
                    < Text size="xsmall"><Waypoint size="small" color="green" style={{ marginRight: "5px", paddingTop: "3px" }}></Waypoint>Utsteder til {indetifierLabel()}</Text>
                }
            </Box>
        </Box >
    )
}