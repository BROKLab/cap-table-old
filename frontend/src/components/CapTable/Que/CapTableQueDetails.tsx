import { ethers } from 'ethers';
import { Box, Button, Grid, Heading, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { CapTableQue } from '../../../hardhat/typechain/CapTableQue';
import { ProcessQue } from '../../Que/ProcessQue';
import { Modal } from '../../ui/Modal';

interface Props {
    capTableQue: CapTableQue,
    capTableAddress: string,
}

interface QueInfo {
    uuid: string,
    status: number
}

export enum QueStatus {
    Qued = 1,
    Approved = 2,
    Declined = 3,
}
export const CapTableQueDetails: React.FC<Props> = ({ ...props }) => {
    const [info, setInfo] = useState<QueInfo>();

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const { status, uuid } = await props.capTableQue.info(props.capTableAddress)
            if (subscribed) {
                setInfo({
                    uuid: uuid !== ethers.constants.HashZero ? ethers.utils.parseBytes32String(uuid) : "Inget OrgNr.",
                    status: status.toNumber()
                })
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [])

    const getStatus = (status: QueStatus) => {
        switch (status) {
            case QueStatus.Approved:
                return "Godkjent"
                break;
            case QueStatus.Declined:
                return "Avslått"
                break;
            case QueStatus.Qued:
                return "I kø"
                break;
            default:
                return "Ikke gyldig status"
                break;
        }
    }
    return (
        <Box>
            <Heading level={3}>Kø detaljer</Heading>
            <Box gap="small">
                {info &&
                    <Grid columns={["small", "flex"]}>
                        <Text>Orginisasjonsnummer</Text>
                        <Text weight="bold">{info.uuid}</Text>
                    </Grid>
                }

                {info &&
                    <Grid responsive={true} columns={["small", "flex"]}>
                        <Text>Status</Text>
                        <Text weight="bold">{getStatus(info.status)}</Text>

                    </Grid>
                }

                {info &&
                    <Grid responsive={true} columns={["small", "flex", "flex"]}>
                        <Text></Text>
                        <Modal label="Kø admin" buttonSize="small">
                            <ProcessQue capTableQue={props.capTableQue} capTableAddress={props.capTableAddress}></ProcessQue>
                        </Modal>
                    </Grid>
                }




            </Box>
        </Box>
    )
}