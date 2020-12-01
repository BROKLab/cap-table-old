import { BytesLike, ethers } from 'ethers';
import { Box, Button, Grid, Select, Text, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ERC1400 } from '../../hardhat/typechain/ERC1400';

interface Props {
    capTable: ERC1400,
    done?: () => void
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
    const { handleSubmit, control, errors, setValue } = useForm<FormData>({
        defaultValues: {
            address: ["0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"],
            amount: [""],
            partition: [""],
        }
    });
    const [rows, setRows] = useState(1);
    const history = useHistory()
    const [partitions, setPartitions] = useState<BytesLike[]>([]);
    const [newPartition, setNewPartition] = useState("");
    const partitionsIsHidden = true; // TODO 🤷‍♀️. Should only be shown when "Yes" i selected in the step above. https://trello.com/c/GRQXqkH6/131-batchissue-partitions-is-hidden-unless-the-user-selects-that-it-should-be-shown

    // Get partitions
    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const partitionsBytes32 = await props.capTable.totalPartitions()
            if (subscribed) {
                setPartitions(partitionsBytes32)
            }
        };
        doAsync();
        return () => { subscribed = false }
    }, [props.capTable])

    const onSubmit = async (data: FormData) => {
        console.log("onSubmit=>", data);
        // ISSUE SHARES
        await createArrayWithNumbers(rows)
            .reduce(async (prev, rowNr) => {
                await prev
                // TODO : Handle CDP
                const txData = "0x11"
                const tx = await props.capTable.issueByPartition(data.partition[rowNr], data.address[rowNr], ethers.utils.parseEther(data.amount[rowNr]), txData)
                tx.wait()
                return Promise.resolve()
            }, Promise.resolve())
        history.push("/captable/" + props.capTable.address)
        if (props.done) props.done()
    }

    const handleNewPartition = () => {
        setPartitions(old => [...old, ethers.utils.formatBytes32String(newPartition)])
        setNewPartition("")
    }



    const COLUMNS = { count: 3, size: "auto" }
    return (
        <Box gap="medium">
            <Box gap="small">
                <Grid columns="1" fill="horizontal" gap="small">
                    <Text size="small" weight="bold" truncate>Har selskapet aksjeklasser?</Text>
                </Grid>
                <Box gap="small" direction="row-responsive">
                    <Button color="black" label="Ja, legg til aksjeklasser" onClick={() => setRows(rows + 1)} style={{ borderRadius: "0px" }}></Button>
                    <Button color="black" label="Nei, selskapet har kun ordinære aksjer" onClick={() => setRows(rows + 1)} style={{ borderRadius: "0px" }}></Button>
                </Box>
            </Box>

            <Box gap="small" hidden={partitionsIsHidden}>
                <Grid columns={["medium", "small"]}>
                    <TextInput size="small" value={newPartition} onChange={(e) => setNewPartition(e.target.value)} placeholder="Navn på partisjon feks. a-aksje"></TextInput>
                    <Button size="small" label="Foreslå partisjon" onClick={() => handleNewPartition()}></Button>
                </Grid>
                <Text size="small">Partisjoner blir først lagret når du utsteder en aksje på den.</Text>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box gap="small">
                    <Grid columns={COLUMNS} fill="horizontal" gap="small">
                        <Text size="small" weight="bold" truncate>Addresse</Text>
                        <Text size="small" weight="bold" truncate>Antall aksjer</Text>
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
                                <Controller
                                    render={({ onChange, value }) => <Select
                                        options={partitions}
                                        size="small"
                                        labelKey={(option) => ethers.utils.parseBytes32String(option)}
                                        emptySearchMessage={"Foreslå en partisjon ovenfor"}
                                        onChange={({ option }) => {
                                            setValue("org", option)
                                            setValue(`partition[${rowNr}]`, option)
                                            return option
                                        }}
                                    />}
                                    name={`partition[${rowNr}]`}
                                    control={control}
                                    rules={{ required: true }}
                                    defaultValue={null}

                                />
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
        </Box>

    )
}