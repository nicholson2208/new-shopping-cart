import React, { Component } from 'react';

import FilterableProductTable from '../FilterableProductTable';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseConfig from '../../firebase-config.json'  // NEED THIS FILE FROM OTHER MACHINE!

// Get the Firebase config from the auto generated file.
//const firebaseConfig = require('../.././firebase-config.json').result;


console.log(firebaseConfig)
// Instantiate a Firebase app.
//const firebaseApp = 

const fire = firebase.initializeApp(firebaseConfig);

const database = fire.database();

export default class BaseTemplate extends Component {
    constructor(){
      
      super();

      this.uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => false,
        },};

      this.state = {
        "products" : [],
        "inShoppingCart" : {},
       "isShoppingCartActive": false,
       user: null,
        };
      this.handleAddToCart = this.handleAddToCart.bind(this);
      this.handleToggleCart = this.handleToggleCart.bind(this);
      this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);



      let prods = database.ref('products');

      prods.on('value', data => {
        let product = [];

        data.forEach(child => {
          product.push(child.val());

        });

        this.setState({
            products: product,
        });
    });
    }


    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            user: user,
          });
        }
      });
    }

    componentWillUnmount() {
      this.unregisterAuthObserver();
    }

    handleLogOut() {
      firebase.auth().signOut()
        .then(() => {
          this.setState({
            user: null
          });
      });
    }
  
    handleRemoveFromCart(product){ // I think the fix here is to make it like a quantity
      // and have different rules for multiple of the same item
      console.log("oh boy, I removed something");
      console.log(product.id);
      let newProductList = this.state.inShoppingCart;

      newProductList.forEach((x) =>{
        console.log(x.id)
      });
      
      newProductList = newProductList.filter((item)=> {return(item.id !== product.id)});

      this.setState({"inShoppingCart": newProductList});
    }

    handleAddToCart(product){      
      console.log(product);

      let newProductObject = this.state.inShoppingCart;

      if (product["sku"] in newProductObject){
        newProductObject[product["sku"]] += 1;
      } else {
        newProductObject[product["sku"]] = 1
      }

      
      this.setState({"inShoppingCart": newProductObject});

    }

    handleToggleCart() {
      const toggled = !this.state.isShoppingCartActive;

      console.log("you clicked on the shopping cart");
      this.setState({"isShoppingCartActive": toggled});

    }

    render() {
      return (
        <div>
        { this.state.user === null ? 
          <div>
  
          <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
        </div>
    : <div>
        <button 
          onClick={() => this.handleLogOut()}>
          log out
        </button>
         <FilterableProductTable 
          products={this.state.products} 
          isShoppingCartActive = {this.state.isShoppingCartActive}
          inShoppingCart = {this.state.inShoppingCart}
          handleAddToCart = {(p) => this.handleAddToCart(p)}
          handleRemoveFromCart = {(p) => this.handleRemoveFromCart(p)} 
          handleToggleCart = {() => this.handleToggleCart()}
          
        />
      </div>
        }


        </div>
        
        
        
      );
    }
  }

 