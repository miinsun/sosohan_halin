/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const StoreInformationView = ({ store }) => (

  <div>
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col-auto d-none d-lg-block">
        <img width="200px" height="200px" src={store.logoImage} />
      </div>
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-success">{store.mainCategory}</strong>
        <h3 className="mb-0">{store.name}</h3> <p />
        <div className="mb-1 text-muted">{store.shortIntroduce}</div>
        <div className="mb-1 text-muted">{store.introduce}</div>
        <div className="mb-1 text-muted">{store.address1} {store.address2}</div>
        <div className="mb-1 text-muted">{store.telephone}</div>
        <hr color="gray" align="left" size="5" />
      </div>
    </div>
  </div>
);

export default StoreInformationView;
