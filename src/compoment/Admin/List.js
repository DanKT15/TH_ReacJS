import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextProvider } from "./Context";

export function Thead({ data }) {
    return ( 
        <thead>
          <tr>
            {
                data.map((e) => <th scope="col">{ e.value }</th>)
            }
          </tr>
        </thead>
    );
}

export function Tbody({ data, handleDelete, linkUpdate }) {
    return ( 
        <tbody>

            {
                data.map((e) => 
                    <tr>

                        {
                            e.data?.map((i) => <th scope="row">{ i }</th>)
                        }
            
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button onClick={() => linkUpdate(e.id) } type="button" className="btn btn-secondary">Edit</button>
                                <button onClick={() => handleDelete(e.id) } type="button" className="btn btn-secondary">Del</button>
                            </div>
                        </td>
            
                    </tr>
                )
            }
          
        </tbody>
    );
}

export function Table({ datathead, datalist, handleDelete, linkUpdate }) {
    return ( 
        <table className="table table-hover">
            <Thead data={ datathead }/>
            <Tbody data={ datalist } handleDelete={ handleDelete } linkUpdate= { linkUpdate }/>
        </table>
    );
}

export default function List({ datathead, datalist, handleDelete, linkUpdate }) {

    // const datalist = [
    //     {data: ["ASF", "ASF"]},
    //     {data: ["ASF", "ASF"]},
    //     {data: ["ASF", "ASF"]},
    //     {data: ["ASF", "ASF"]},
    //     {data: ["ASF", "ASF"]}
    // ];

    // const datathead = [
    //     {value: "Ten"},
    //     {value: "Lop"},
    //     {value: "cai dat"}
    // ];

    return ( 
        <Table datathead={ datathead } datalist={ datalist } handleDelete={ handleDelete } linkUpdate= { linkUpdate } />
    );
}
