import React, { SyntheticEvent } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CircularProgress } from "@mui/material";
import { Feature } from "../types/AutoCompleteLocation";
import { AxiosError } from "axios";

//AutoComplete was developed using the Material UI Autocomplete API https://mui.com/api/autocomplete/
//Props drilling is another way of transferring data between components it can be also done through the redux store
interface CityAutoCompleteProps {
  onCityInputChange: (
    // A synthetic event is a cross-browser wrapper around the browser’s native event.
    // It has the same interface as the browser’s native event, including stopPropagation() and preventDefault(),
    // except the events work identically across all browsers.
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => void;
  options: Feature[] | undefined;
  error: AxiosError<any, any> | null;
  isLoading: boolean;
  onSelectionChange: (
    event: SyntheticEvent<Element, Event>,
    value: Feature | null
  ) => void;
}

export default function CityAutoComplete(props: CityAutoCompleteProps) {
  const { onCityInputChange, options, error, isLoading, onSelectionChange } =
    props;

  return (
    <Autocomplete
      id="City-select"
      sx={{ minWidth: 300 }}
      options={options || []}
      autoHighlight
      onChange={onSelectionChange}
      getOptionLabel={(option) => option.properties.city || ""}
      noOptionsText={error ? "a problem happened" : "no results"}
      isOptionEqualToValue={(option, value) =>
        option.properties.city === value.properties.city
      }
      loadingText="it is loading ..."
      onInputChange={onCityInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a City"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  );
}
