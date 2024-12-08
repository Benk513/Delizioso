import { useMemo, useState } from 'react'
import { useReactTable, flexRender, getCoreRowModel, getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel } from '@tanstack/react-table'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button'
import { ChevronDown, MoreHorizontal,Settings } from 'lucide-react'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { motion } from "framer-motion"


const DataTable = ({users}) => {

  
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] =useState([])
  const [columnVisibility, setColumnVisibility] =useState({})
  const [rowSelection, setRowSelection] =useState({})


  console.log(users)
  const data = useMemo(() => users, [users])
/** @type import('@tanstack/react-table').columnDef<any>*/
  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="rounded-md border border-slate-400 size-5 data-[state=checked]:bg-slate-600 "
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'id',
      header: 'ID',
      cell: 1,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: info => info.getValue(),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: info => info.getValue(),
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: info => info.getValue(),
    },
    {
      accessorKey: 'phone',
      header: 'Phone',
      cell: info => info.getValue(),
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: info => info.getValue(),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: () => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => alert('clicked')}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem> <Settings className="mr-2 h-4 w-4" />
              <span>See Details</span></DropdownMenuItem>
              <DropdownMenuItem> <Settings className="mr-2 h-4 w-4" />
              <span>Delete </span></DropdownMenuItem>
              <DropdownMenuItem> <Settings className="mr-2 h-4 w-4" />
              <span>Banne </span></DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },

  ]

  



  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state:{
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    }
  })
 






  return (
    <motion.div
    className=" w-full   overflow-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }} >

    
  
     <div > 
     <div className="flex items-center py-4 ">
    <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-slate-800/50 border border-slate-400 rounded-lg"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button   className="ml-auto bg-slate-600 hover:bg-slate-600/50 rounded-lg">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-slate-200">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
    </div>

    <div className="rounded-lg border border-slate-500 bg-opacity-50 bg-slate-800">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}

                  </TableHead>
                )
              })}
            </TableRow>

          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel()?.rows?.length ? (
            table.getRowModel()?.rows?.map((row) => (
              <TableRow
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}

              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}
                className="h-24 text-center">No data available</TableCell>
            </TableRow>
          )}
        </TableBody>

      </Table></div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
     </div>

     

   
   
    </motion.div>
  )
}

export default DataTable