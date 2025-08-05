import { ColumnDef } from "@tanstack/react-table"

export type Payment={
    id: string;
    amount: number;
    username:string;
    email:string;
    status:"pending" | "Processing" | "success" |"failed";
}
export const columns: ColumnDef<Payment>[] = [
  
  {
    accessorKey: "username",
    header: "User",
  },
  {
    accessorKey: "email",
    header: "Email",
  },{
    accessorKey: "status",
    header: "Status",
    // cell:({row})=>{

    //     const status = row.getValue("status")
    //     return(
    //         <div className="">{status as string}</div>
    //     )
    // }
  },
  {
    accessorKey: "amount",
    header: "Amount",
    
    
  },
]
