import { DataGrid } from "devextreme-react";
import { Column, HeaderFilter, Sorting } from "devextreme-react/data-grid";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {ReactComponent as StatusCirclePendingSVG} from "../assets/status-small-circle-pending.svg"
import {ReactComponent as StatusCircleCompletedSVG} from "../assets/status-small-circle-completed.svg"

const GeneralTable = ({filteredData, columns, clickable}) => {
    const navigate = useNavigate();
    const onRowPrepared = (e) => {
        if(e.rowType === 'data') {
            e.rowElement.classList.add("cursor-pointer");
        }
    }

    const handleRowClick = useCallback((row) => {
        const rowData = row.data;
        const values = row.values;
        console.log(values)
        navigate(`${clickable}/${values[0]}`, {state: {rowData}});
      }, [navigate, clickable]);
    return <>
        <DataGrid id='dataGrid' dataSource={filteredData} keyExpr="id" onRowPrepared={onRowPrepared} onRowClick={clickable ? handleRowClick : null}>
            {
                columns.map(({dataField, caption}, index) => (
                    <Column key={index} dataField={dataField} caption={caption} allowSorting cellRender={({ value }) => 
                        <div>
                            {
                                (value === "Pending" ?  <span className="rounded-full px-3 py-1 space-x-2 text-sm bg-yellow-100"><span className="inline-flex items-center"><StatusCirclePendingSVG className="inline" /></span><span>{value}</span></span> : value === "Completed" ? <span className="rounded-full px-3 py-1 space-x-2 text-sm bg-green-200"><span className="inline-flex items-center"><StatusCircleCompletedSVG className="self-center inline" /> </span><span>{value}</span></span>
                                : <span className="">{value}</span>)
                            }
                        </div>
                    } />
                ))
            }
            {/* <SearchPanel visible /> */}
            <Sorting mode='multiple' showSortIndexes/>
            <HeaderFilter visible/>
        </DataGrid>
    </>
}

export default GeneralTable;