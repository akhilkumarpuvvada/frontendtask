import { React, useEffect, useState } from 'react'

import Items from './Items';
const axios = require('axios');

const Chemicals = ({ searchType, textBoxValue }) => {


    //Setting Up data State using  useState Hook
    const [data, setData] = useState("")



    //API URL FOR PRODUCTION 
    const PRODUCTION_API_URL = "http://chemical-search-pioneer.herokuapp.com/";



    //API URL FOR PRODUCTION 
    const PRODUCTION_API_URL2 = "https://chemovatorbackendmain.herokuapp.com/";


    //API URL FOR DEVELOPMENT
    const DEVELOPMENT_API_URL = "http://localhost:3001/"


    // BELOW FUNCTION GETS DATA FROM THE API 


    const getData = (searchType) => {

        // CHECKING THE SEARCH TYPE 
        if (searchType === "Chemical Type") {

            axios.get(PRODUCTION_API_URL2 + "getChemicalDetailsChem" + "/" + textBoxValue)
                .then((response) => {

                    setData(response.data)



                }).catch((eror) => {
                    setData("");
                    console.error(eror)
                });
        }

        else if (searchType === "Patent No") {

            axios.get(PRODUCTION_API_URL2 + "getPatentDataPatentNo" + "/" + textBoxValue)
                .then((response) => {

                    setData(response.data);

                }).catch((eror) => {
                    setData("");
                    console.error(eror)
                });
        }
        else if (searchType === "Patent Title") {

            axios.get(PRODUCTION_API_URL2 + "getChemicalDetailsTitle" + "/" + textBoxValue)
                .then((response) => {

                    setData(response.data);

                }).catch((eror) => {
                    setData("");
                    console.error(eror)
                });
        }

        else {

            console.log("BAD REQUEST")
        }

    }

    useEffect(() => {
        getData(searchType)
    });


    return (
        <div className="search-form">
            <h1 className=" text-xl font-semibold	tracking-normal m-0 pl-0 pt-4 pb-4">
                No. of Records : {data.length}

            </h1>
            {/* ONLY RENDER ITEMS IF THE DATA IS FETCHED AND STATE IS BEEN SET */}
            {data !== "" ?
                data.map(element => {
                    return (<div className="flex w-full	pt-2 pb-2">

                        <Items

                            title={element.patent_title}
                            patent_no={element.patent_no}
                            chemical_type={element.chemical_type_1}


                        />
                    </div>)
                })



                :

                data.length === 0 ? <h1 className=" text-xl font-semibold text-center	tracking-normal m-0 pl-0 pt-4 pb-4">
                    NO RECORDS FOUND.....
                </h1> : ""






            }



        </div>
    )
}

export default Chemicals


