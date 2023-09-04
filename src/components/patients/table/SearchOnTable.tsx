import React from "react";
import CustomTextField from "src/components/forms/theme-elements/CustomTextField";

const SearchOnTable = ({ searched, setSearched }: any) => {
  return (
    <CustomTextField
      type="search"
      name="search"
      placeholder="search by name or phone"
      onChange={(event: any) => setSearched(event.target.value)}
      //   onBlur={(event: any) => setSearched(event.target.value)}
      //   onBlur={handleBlur}
      // value={values.street}
      id="search-text"
      variant="outlined"
      fullWidth
    />
  );
};

export default SearchOnTable;
