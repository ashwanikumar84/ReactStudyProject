import React from 'react'

const ListLoading = (Component) => {

    return function withLoadingComponent({ isLoading, ...props }){

        if (!isLoading){
            return <Component {...props} />;
        }
        return(
            //In React 16.2, we can do this to avoid the surrounding container div:
            // It’s a tiny bit faster and has less memory usage (no need to create an extra DOM node). 
            // This only has a real benefit on very large and/or deep trees, but application performance often suffers from death by a thousand cuts.
            <React.Fragment>
                <p style={{ textAlign: 'center', fontSize: '30px' }}>
                    Hold on, fetching data may take some time :)
                </p>
            </React.Fragment>
        );
    };
} 

export default ListLoading