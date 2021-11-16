import React, { Component } from 'react';
import './App.css';
import Filter from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';


let PRODUCTS =
{
    '1': {id: 1, category: 'Music', price: '$49.99', name: 'Guitar'},
    '2': {id: 2, category: 'Music', price: '$200', name: 'Banjo'},
    '3': {id: 3, category: 'Music', price: '$500', name: 'Piano'},
    '4': {id: 4, category: 'Furniture', price: '$20', name: 'Chair'},
    '5': {id: 5, category: 'Furniture', price: '$120', name: 'Table'},
    '6': {id: 6, category: 'Furniture', price: '$80', name: 'Cupboard'}
};

class Product extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            products : PRODUCTS,
            fText : ''
          }
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSave = this.handleSave.bind(this)
      }
    
      handleFilter = (fInput) => {
        this.setState(fInput);
      }
      handleSave = (product) => {
        if (!product.id) {
             product.id = new Date().getTime()
        }
      this.setState((prevState) => {
        let products = prevState.products
        product.price  = '$'+product.price;
        products[product.id] = product
        return { products }
      });
    }
      handleDelete = (prodID) =>
      {
          this.setState((prevState) => {
      let products = prevState.products
      delete products[prodID]
      return { products }
    });
      }
    render(){
        return (
        <div className="container-fluid">
        <div className="row justify-content-md-center">
        <div className="col-md-6">
        <h1>My Inventory</h1>
        <Filter onFilter ={this.handleFilter}/>
        <ProductTable 
            products = {this.state.products}
            fText = {this.state.fText}
            onDelete = {this.handleDelete}/>
        <ProductForm onSave = {this.handleSave}></ProductForm>
    </div>
</div>
</div>
        )
}
}

export default Product;