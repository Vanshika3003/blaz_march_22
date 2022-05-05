import React,{Fragment, Suspense} from 'react';

// Lets Lazy Load the Component by importing it using the React.Lazy()

const AjaxCallComponent = React.lazy(()=>
    import('./../useeffectajaxcomponent/ajaxcallcomponent'));


const LazyComponent=()=>{
    return(
        <Fragment>
            <Suspense fallback={
                <div className='container'>
                     <strong> Nothing to show</strong>
                </div>
            }>
                {
                    /* Create a Placeholder for the component that will be loaded lazily */
                }
                <section>
                    <AjaxCallComponent></AjaxCallComponent>
                </section>
            </Suspense>
        </Fragment>
    );
};

export default LazyComponent;