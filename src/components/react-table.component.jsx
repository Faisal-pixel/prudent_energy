import React, {useCallback} from "react";
import {ReactComponent as SortIconUpSVG} from "../assets/sort-icon-up.svg";
import {ReactComponent as SortIconDownSVG} from "../assets/sort-icon-down.svg";
import {ReactComponent as SortIconUpDownSVG} from "../assets/sort-icon-up-down.svg";
import {ReactComponent as StatusCirclePendingSVG} from "../assets/status-small-circle-pending.svg"
import {ReactComponent as StatusCircleCompletedSVG} from "../assets/status-small-circle-completed.svg"

import { useTable, useSortBy, useFilters } from "react-table";
import { useNavigate } from "react-router-dom";

const ReactTable = ({columns, data, showFilter, goTo}) => {
    const tableInstance = useTable({columns, data}, useFilters, useSortBy)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

      const renderSortIcon = (column) => {
        if (!column.canSort) {
          return null;
        }
      
        if (column.isSorted) {
            console.log(column.isSorted)
            console.log("Descending " + column.isSortedDesc)
            
            return column.isSortedDesc ? <SortIconDownSVG className="inline" /> : <SortIconUpSVG className="inline" />
        }
      
        return <SortIconUpDownSVG className="inline"/>
      };

      const navigate = useNavigate()

      const onListContainerClick = useCallback((row) => {
        if (goTo === undefined) return null;
        const getFirstMemberOfRow = () => {
            for (const key in row) {
                if (row.hasOwnProperty.call(row, key)) {
                    const element = row[key];
                    return element
                }
            }
        }
        navigate(`${goTo}/${getFirstMemberOfRow()}`, {state: {row}});
      }, [navigate, goTo]);
    return <>
        <table className="w-full max-h-full" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr className="text-left border-b-2 border-secondaryBackground" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className="px-3 py-3 text-greyDark font-normal" {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')} {renderSortIcon(column)}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr className="cursor-pointer border-b-2 border-greyLight" {...row.getRowProps()} onClick={() => onListContainerClick(row.original)}>
                            {row.cells.map(cell => {
                                if (cell.column.id === "status") {
                                    return <td className="px-3 py-3"  {...cell.getCellProps()}>{cell.value === "Pending" ?  <span className="rounded-full px-3 py-1 space-x-2 text-sm bg-yellow-100"><span className="inline-flex items-center"><StatusCirclePendingSVG className="inline" /></span><span>Pending</span></span> : <span className="rounded-full px-3 py-1 space-x-2 text-sm bg-green-200"><span className="inline-flex items-center"><StatusCircleCompletedSVG className="self-center inline" /> </span><span>Completed</span></span>}</td> 
                                }
                                return <td className="px-3 py-3" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
}



export default ReactTable;