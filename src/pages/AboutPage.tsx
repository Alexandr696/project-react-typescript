
import { useReducer, useState } from "react"
import { TableHead } from "../components/TableHead"
import { columns } from "../data/columns"
import { products } from "../data/products"

export function AboutPage () {

    
    return (
        <div className="my-12 max-w-7xl px-4 mx-auto">
        <div className="table-responsive">
            <table className="table">
            <thead>
                <tr>
                    {columns.map((column,index) => <TableHead column={column} key={index}/>)}
                </tr>
            </thead>
                <tbody>
                <tr>
                    <td>Microsoft</td>
                    <td></td>
                    <td>нет</td>
                    <td>да</td>
                    <td>да</td>
                </tr>
                <tr>
                    <td>Microsoft</td>
                    <td>да</td>
                    <td>нет</td>
                    <td>да</td>
                    <td>да</td>
                </tr>
                <tr>
                    <td>Microsoft</td>
                    <td>да</td>
                    <td>нет</td>
                    <td>да</td>
                    <td>да</td>
                </tr>
                <tr>
                    <td>Microsoft</td>
                    <td>да</td>
                    <td>нет</td>
                    <td>да</td>
                    <td>да</td>
                </tr>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    </div>
    )
}