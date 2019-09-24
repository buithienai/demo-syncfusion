import React, { Component } from 'react';
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import { hardwareData } from './datasource';
import './App.css';

const pageSettings = { pageSize: 10 }
const sortSettings = { columns: [
	{field: 'TaskID', direction: 'Ascending' }
]};

class App extends Component {

	handleClick = () => {
		alert(123);
	}

	renderButton = (props) => {
		console.log(props.Status);
		return (
			<div>
				<button onClick={this.handleClick}>
					<span>{props.Status}</span>
				</button>
			</div>
		);
	}

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
					<ColumnDirective field='Status' headerText='Action' width='180' template={this.renderButton} textAlign='Center' />
				</ColumnsDirective>
				<Inject services={[Page, Sort, Filter, Group]} />
			</GridComponent>
		);
	}
}

export default App;