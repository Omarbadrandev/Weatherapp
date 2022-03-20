import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { LocationKey } from "../Constants";
import { AutocompleteLocations } from "../types/AutoCompleteLocations";

//https://react-query.tanstack.com/reference/useQuery
//all hooks are generated with instruction from the library documentation://https://react-query.tanstack.com/reference/useQuery
interface Props {
  city: string;
}
export function useGetAutoCompleteLocation(props: Props) {
  const { city } = props;

  const fetchLocation = async () => {
    const { data: location } = await axios.get(
      "https://api.geoapify.com/v1/geocode/autocomplete?text=" +
        city +
        "&apiKey=7801286773124c69ba68fa1648415b3c"
    );
    return location;
  };
  const locationQuery = useQuery<AutocompleteLocations, AxiosError>(
    [LocationKey, city],
    fetchLocation,
    {
      //https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked
      //is enabled is set to false to be handeled manually through the button as described in stackoverflow given above
      enabled: !!city,
      //https://github.com/tannerlinsley/react-query/issues/1990
      retry: false, //disabling retry on error only to show the error message directly to the user,because the query only transitions to error state when the retries are done.
      refetchOnMount: true,
      onSuccess: () => {
        console.log("Location success");
      },
      onError: (error) => {
        //https://tkdodo.eu/blog/react-query-error-handling
        window.alert(`oops! Something went wrong: ${error.message}`);
      }
    }
  );
  return locationQuery;
}
