import React, { Component } from 'react';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import { hardwareData } from './datasource';
import './App.css';

const pageSettings = { pageSize: 10 }
const sortSettings = { columns: [
	{field: 'TaskID', direction: 'Ascending' }
]};

class App extends Component {


	render() {
		return (
			<GridComponent
				dataSource={hardwareData}
				allowPaging={true} 
				pageSettings={pageSettings}
				allowSorting={true} 
				sortSettings={sortSettings}
			>
				<ColumnsDirective>
					<ColumnDirective field='TaskID' width='100' textAlign="Right"/>
					<ColumnDirective field='Name'/>
					<ColumnDirective field='Category' textAlign="Right"/>
					<ColumnDirective field='SerialNo' width='100' format="C2" textAlign="Right"/>
					<ColumnDirective field='InvoiceNo' width='100'/>
					<ColumnDirective field='DOP' width='100'/>
					<ColumnDirective field='WEO' width='100'/>
					<ColumnDirective field='Status' width='100'/>
					<ColumnDirective field='AssignedTo' width='100'/>
					<ColumnDirective field='Note' />
				</ColumnsDirective>
				<Inject services={[Page, Sort, Filter, Group]} />
			</GridComponent>
		);
	}
}

export default App;