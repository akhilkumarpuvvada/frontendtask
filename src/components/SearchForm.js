import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import Button from "@mui/material/Button";

import Chemicals from '../components/Chemicals'
const SearchForm = () => {

  const [searchType, setsearchType] = useState("");
  const [textBoxValue, settextBoxValue] = useState("");
  const [showChemical, setShowChemical] = useState(false);

  const searchTypeGet = (event) => {
    console.log(event.target.value);


    setsearchType(event.target.value);


  };


  const searchButtonClick = () => {
    console.log(textBoxValue)

    if (textBoxValue !== '' && searchType !== '') { setShowChemical(true); }
    else { console.log("Select the value") }


  }
  return (
    <>
      <div className="search-box">
        <h1 className="font-bold text-4xl	tracking-normal	text-center">
          {" "}
          Search For a Record{" "}
        </h1>
        <h1 className=" text-xl font-semibold	tracking-normal m-0 pl-0 pt-4 pb-4">
          Enter {searchType}{" "}
        </h1>
        <div className="w-100">
          <TextField
            onChange={(e) => {

              console.log(e.target.value)
              settextBoxValue(e.target.value);
            }}
            className="w-100"
            value={textBoxValue}
            label={searchType}
            variant="outlined"
          />
        </div>
        <FormControl component="fieldset">
          <h1 className=" font-bold tracking-normal text-lg	 m-0 pl-0 pt-5 pb-2">
            Select Search Type: {searchType}{" "}
          </h1>
          <RadioGroup
            value={searchType}
            onChange={searchTypeGet}
            row
            aria-label="Search Type"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Patent No"
              control={<Radio />}
              label="Patent No"
            />
            <FormControlLabel
              value="Chemical Type"
              control={<Radio />}
              label="Chemical Type  "
            />
            <FormControlLabel
              value="Patent Title"
              control={<Radio />}
              label="Patent Title"
            />
          </RadioGroup>
          <div className="w-100 pl-0 pt-3 pb-5">
            <Button onClick={searchButtonClick} variant="contained">Search</Button>
          </div>
        </FormControl>
      </div>
      {showChemical === true ? <Chemicals textBoxValue={textBoxValue} searchType={searchType} /> : ""}


    </>
  );
};

export default SearchForm;
