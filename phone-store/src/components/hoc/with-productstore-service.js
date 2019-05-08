import React from 'react';
import { ProductstoreServiceConsumer } from '../Productstore-service-context';

const withProductstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <ProductstoreServiceConsumer>
        {
          (productstoreService) => {
            return (<Wrapped {...props}
                     productstoreService={productstoreService}/>);
          }
        }
      </ProductstoreServiceConsumer>
    );
  }
};

export default withProductstoreService;
