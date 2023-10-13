import { DataGrid } from "devextreme-react";
import { Column, HeaderFilter, SearchPanel, Sorting } from "devextreme-react/data-grid";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PurchaseContractsTables = ({filteredData}) => {
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
        navigate(`details/${values[0]}`, {state: {rowData}});
      }, [navigate]);
    return (
        <>
            <DataGrid id='dataGrid' dataSource={filteredData} keyExpr="id" onRowPrepared={onRowPrepared} onRowClick={handleRowClick}>
                <Column dataField="contractNo" caption="Contract No" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
                <Column dataField="description" caption="Description" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
                <Column dataField="contractDateAndTime" caption="Contract Date & Time" allowSorting cellRender={({ value }) => <div className="">{value}</div>} />
                {/* <SearchPanel visible /> */}
                <Sorting mode='multiple' showSortIndexes/>
                <HeaderFilter visible/>
            </DataGrid>
        </>
    )
}

export default PurchaseContractsTables;