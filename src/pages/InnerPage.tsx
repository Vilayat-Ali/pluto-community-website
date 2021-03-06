import React from 'react';

// Components 

interface innerPageTypes{
  pageName: string,
  pageDescription: string,
  ordinaryPage: boolean,
  children:any
}

export default function InnerPage(props: innerPageTypes) {

    const ordinaryPageStyle = { display: 'block' };
    const notOrdinaryStyle = { display: 'none'};

    const breadCrumbStyle = props.ordinaryPage ? ordinaryPageStyle : notOrdinaryStyle;
    const headerStyle = props.ordinaryPage ? ordinaryPageStyle : notOrdinaryStyle;

    return (
        <main id="main">

          <div className="breadcrumbs py-4" style={breadCrumbStyle}>
            <div className="container">
    
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="display-6">{props.pageName}</h3>
                <ol style={{fontSize: '1rem'}}>
                  <li><a href="/">Home</a></li>
                  <li>{props.pageName}</li>
                </ol>
              </div>
    
            </div>
          </div>
    
        <section className="inner-page">
          <div className="container" data-aos="fade-up">
    
            <div className="section-header py-1" style={headerStyle}>
              <h2>{props.pageName}</h2>
              <p>{props.pageDescription}</p>
            </div>
    
            {/* Put your inner page react components in between these tags */}

              {props.children}  

            {/* Put your inner page react components in between these tags */}
    
          </div>
        </section>
    
      </main>
    )

}