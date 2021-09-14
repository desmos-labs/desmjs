import React from "react";
import {useSdkContext} from "@desmoslabs/sdk-react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const ChainSelector: React.FC<{ className?: string }> = ({className}) => {
    const {desmosChains, setCurrentChainId, currentChainId} = useSdkContext();

    return <FormControl className={className}>
        <InputLabel>Chain</InputLabel>
        <Select
            value={currentChainId}
            onChange={(e) => {
                setCurrentChainId(e.target.value as string);
            }}
        >
            {Object.keys(desmosChains).map(chain => <MenuItem value={chain} key={chain}>{chain}</MenuItem>)}
        </Select>
    </FormControl>
}

export default ChainSelector;