import React from 'react'

function Items({ title, patent_no, chemical_type }) {
    // Item component receives values as props 
    return (
        <div style={{ width: "100%" }} className="item  rounded	flex flex-col  justify-between	p-4 cursor-pointer hover:drop-shadow">

            <span><strong className="font-bold">Patent No: </strong> {patent_no}</span>
            <span> <strong className="font-bold">Patent Title: </strong>{title}</span>
            <span> <strong className="font-bold">Chemical Type: </strong>{chemical_type}</span>
            <span className=" "> <strong className="font-bold">Link: </strong>  <a target="_blank" style={{ color: "blue" }} href={"https://patents.google.com/patent/" + patent_no} >{"patents.google.com/patent/" + patent_no}</a></span>
        </div>
    )
}

export default Items
