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
  
    handleRemoveFromCart(key, size){ // I think the fix here is to make it like a quantity
      // and have different rules for multiple of the same item
      console.log("oh boy, I removed something");
      console.log(key);

      let newProductObject = this.state.inShoppingCart;

      if (key in newProductObject && newProductObject[key][size] > 0){
        newProductObject[key][size] -= 1;
      }
      
      this.setState({"inShoppingCart": newProductObject});
    }
    

    handleAddToCart(product, size){      
      // console.log(product);
      // console.log(size);

      let newProductObject = this.state.inShoppingCart;

      if (product["sku"] in newProductObject){
        if ( size in newProductObject[product["sku"]]){
          // console.log(size);
          newProductObject[product["sku"]][size] += 1;
        } else {
          newProductObject[product["sku"]][size] = 1;

        }

      } else {
        newProductObject[product["sku"]] = {};
        newProductObject[product["sku"]][size] = 1
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
              handleAddToCart = {(p, s) => this.handleAddToCart(p, s)}
              handleRemoveFromCart = {(p, s) => this.handleRemoveFromCart(p, s)} 
              handleToggleCart = {() => this.handleToggleCart()}
              
            />
          </div>
            }


            </div>
            
            
            
          );
    }
  }

 