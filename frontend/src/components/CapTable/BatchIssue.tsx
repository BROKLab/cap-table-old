import { ethers } from 'ethers';
import { Box, Button, Grid, Text, TextInput } from 'grommet';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';

interface Props {
    capTable: ERC1400
}
interface FormData {
    address: string[]
    amount: string[]
    partition: string[]
}

const createArrayWithNumbers = (length: number) => {
    return Array.from({ length }, (_, k) => k);
}


export const BatchIssue: React.FC<Props> = ({ ...props }) => {
    const { handleSubmit, control, errors } = useForm<FormData>({
        defaultValues: {
            address: ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"],
            amount: [""],
            partition: [""],
        }
    });
    const [rows, setRows] = useState(1);
    const history = useHistory()

    const onSubmit = async (data: FormData) => {
        console.log("onSubmit=>", data);
        // ISSUE SHARES
        await createArrayWithNumbers(rows)
            .reduce(async (prev, rowNr) => {
                await prev
                console.log("Running issue on row", rowNr);
                // TODO : Handle CDP
                const txData = "0x11"
                const tx = await props.capTable.issueByPartition(ethers.utils.formatBytes32String(data.partition[rowNr]), data.address[rowNr], ethers.utils.parseEther(data.amount[rowNr]), txData)
                tx.wait()
                return Promise.resolve()
            }, Promise.resolve())

        history.push("/captable/" + props.capTable.address)
    }


    const COLUMNS = { count: 3, size: "auto" }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box elevation="large" gap="small" pad="small" margin={{ top: "large" }}>
                <Grid columns={COLUMNS} fill="horizontal" gap="small">
                    <Text size="small" weight="bold" truncate>Addresse</Text>
                    <Text size="small" weight="bold" truncate>Beløp</Text>
                    <Text size="small" weight="bold" truncate>Partisjon</Text>
                </Grid>
                {createArrayWithNumbers(rows).map((rowNr) =>
                    <Grid columns={COLUMNS} fill="horizontal" gap="small" key={rowNr}>
                        <Box >
                            <Controller as={<TextInput size="small" />} name={`address[${rowNr}]`} control={control} rules={{ required: true }} defaultValue={""} />
                            {errors["address"] && errors["address"][rowNr] && <Text color="red" size="xsmall">* {errors["address"][rowNr]?.type}</Text>}
                        </Box>
                        <Box >
                            <Controller as={<TextInput size="small" />} name={`amount[${rowNr}]`} control={control} rules={{ required: true }} defaultValue={""} />
                            {errors["amount"] && errors["amount"][rowNr] && <Text color="red" size="xsmall">* {errors["amount"][rowNr]?.type}</Text>}
                        </Box>
                        <Box >
                            <Controller as={<TextInput size="small" />} name={`partition[${rowNr}]`} control={control} rules={{ required: true }} defaultValue={""} />
                            {errors["partition"] && errors["partition"][rowNr] && <Text color="red" size="xsmall">* {errors["partition"][rowNr]?.type}</Text>}
                        </Box>
                    </Grid>
                )}

                <Box gap="large" alignSelf="end" direction="row-responsive" align="end">
                    <Button color="black" label="Legg til ny rad" onClick={() => setRows(rows + 1)} style={{ borderRadius: "0px" }}></Button>
                    <Button color="red" label="Fjern nederste rad" onClick={() => setRows(rows - 1)} disabled={rows === 1} style={{ borderRadius: "0px" }}></Button>
                    <Button color="black" label="Utsted aksjer" type="submit" /* disabled={!formState.isValid || formState.isSubmitting} */ style={{ borderRadius: "0px" }}></Button>
                </Box>


            </Box>
        </form>
    )
}