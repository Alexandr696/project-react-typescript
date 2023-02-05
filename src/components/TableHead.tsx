import { IColumn } from "../Iterface/IColumn";
import { IProduct } from "../models"

interface columnProp {
    column: string
}

export function TableHead({column}: columnProp) {    
    return (
        <>
            <th className="text-center p-2.5">{column}</th>
        </>
    )
}