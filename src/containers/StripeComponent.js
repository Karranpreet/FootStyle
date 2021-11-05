import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../redux/action/productActions';

const StripePayment =({amt})=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const onToken =(token)=>{
     if(token){
        dispatch(emptyCart());
        history.goBack();
     }
    };

    return(
        <StripeCheckout
        token={onToken}
        name="FootStyle"
        currency="USD"
        amount={amt*100}
        stripeKey="pk_test_51JsE0ASHN7s4gbOvpI0t4bdbtSb5LSdwsLPcDf0dEnp9VlArs8pFIFCksbxmm700MvtSfATXnWdnIPOkgmblm7nG00phAetFr4"
      />
    )
}

export default StripePayment;