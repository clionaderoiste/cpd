/**
 * Created by RocheC on 25/02/2016.
 */

import React from 'react'

export const FilterableProductTable = React.createClass({
	render() {
		//console.log(JSON.stringify(this.props.products));
		return (
			<div>
				<SearchBar />
				<ProductTable data={this.props.products}  />
			</div>
	)
	}
});

export const SearchBar = React.createClass({
	render() {
		return (
			<form>
				<input type="search" placeholder="Search..."/>
				<label>
					<input type="checkbox"/>
					Only show products in stock
				</label>
			</form>
		)
	}
});
export const ProductTable = React.createClass({
	render() {
		this.props.data.map(function(data){
			console.log(data);
		});
		return (
			<table>
				<thead>
				</thead>
				<tbody>
					<ProductCategoryRow category={this.props.data.category}/>
					<ProductRow />
				</tbody>
			</table>
		)
	}
});
export const ProductCategoryRow = React.createClass({
	render() {
		return (
			<tr>
				<td>

				</td>
			</tr>
		)
	}
});
export const ProductRow = React.createClass({
	render() {
		return (
			<tr>
				<td>

				</td>
			</tr>
		)
	}
});
