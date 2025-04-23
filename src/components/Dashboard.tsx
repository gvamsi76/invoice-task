import React, { useState } from "react";
import ModalPop from "../comman/Modal";


const Dashboard: React.FC = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className="d-flex">

      <main className="container-fluid px-0">

        <div className="bg-white py-3 px-3 border-bottom">
          <div className="d-md-flex justify-content-between flex-wrap gap-3 align-items-center">
            <div className="d-flex gap-3 align-items-center flex-wrap">
              <h6 className="fw-bold mb-0">Review</h6>
              <select className="form-select w-auto">
                <option value="Google">Google</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <span className="badge bg-success text-white">Quickbook's Data</span>
            </div>

            <div className="d-flex gap-2 align-items-center flex-wrap mt-3 mt-md-0">
              <div className="btn btn-outline-primary"><i className="fa fa-search" /></div>
              <div className="btn btn-outline-primary" onClick={() => setModal(true)}>Export to Excel</div>
              <div className="btn btn-outline-primary" onClick={() => setModal(true)}>Add Document</div>
              <select className="form-select w-auto">
                <option>Connect</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <div className="btn btn-outline-primary"><i className="fa-solid fa-bell" /></div>
              <div className="btn btn-outline-primary"><i className="fa-solid fa-gear" /></div>
              <div className="btn btn-outline-primary"><i className="fa-regular fa-circle-user" /></div>
            </div>
          </div>
        </div>

        <div className="row g-0">

          <div className="col-lg-9 px-3 py-4">
            <div className="card border-0 shadow-sm p-3">
              <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary" onClick={() => setModal(true)}>Add to Expenses Report</button>
              </div>

              <div className="row g-3">

                <div className="col-md-5">
                  <ul className="nav nav-pills mb-3">
                    <li className="nav-item"><button className="nav-link" disabled>All Documents</button></li>
                    <li className="nav-item"><button className="nav-link active" data-bs-toggle="pill" data-bs-target="#bills">Bills</button></li>
                    <li className="nav-item"><button className="nav-link" data-bs-toggle="pill" data-bs-target="#receipts">Receipts</button></li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="bills">
                        <div className="card-body p-2">
                          <ul className="list-group">
                            {[...Array(8)].map((_, index) => (
                              <li key={index} className="list-group-item d-flex align-items-center">
                                <img src="https://placehold.co/80x50" alt="Bill Icon" className="me-3 img-fluid" />
                                <div>
                                  <a href="#" className="text-primary">{`Bill ${index + 1}`}</a>
                                  <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                  <p className="mb-0">£ 50.59</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="receipts">
                      <div className="card"><div className="card-body">No data available</div></div>
                    </div>
                  </div>
                </div>

        
                <div className="col-md-7">
                  <img src="images/invoice.png" className="img-fluid w-100 rounded shadow-sm" alt="Invoice" />
                </div>
              </div>
            </div>
          </div>

     
          <div className="col-lg-3 bg-white p-3">
            <div className="card p-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src="https://placehold.co/40x40" className="rounded-circle me-2" alt="logo" />
                  <div>
                    <h6 className="fw-bold mb-0">Quickbook</h6>
                    <small>16 June, 2024 | 8:15 PM</small>
                  </div>
                </div>
                <div className="text-end">
                  <small className="text-muted fw-bold">Publishing...</small><br />
                  <small className="text-muted fw-bold">Jimmy Jason</small>
                </div>
              </div>

              <div className="mt-3 d-flex gap-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="autoSync" defaultChecked />
                  <label htmlFor="autoSync" className="form-check-label">Auto-sync</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="saveConfig" defaultChecked />
                  <label htmlFor="saveConfig" className="form-check-label">Save Config</label>
                </div>
              </div>


              <ul className="nav nav-pills mt-3">
                <li className="nav-item"><button className="nav-link active" data-bs-toggle="pill" data-bs-target="#comments">Comments</button></li>
                <li className="nav-item"><button className="nav-link" data-bs-toggle="pill" data-bs-target="#query">Query</button></li>
              </ul>

              <div className="mt-3">
                <label htmlFor="comment" className="form-label text-muted">Type Comment</label>
                <input type="text" id="comment" className="form-control" placeholder="Start typing..." />
              </div>
              <button className="btn btn-light w-100 mt-3" disabled>Add Comment</button>
              <button className="btn btn-primary w-100 mt-2">View Line Items</button>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <button className="btn btn-sm btn-outline-secondary"><i className="fa fa-chevron-left" /></button>
                <h6 className="mb-0">Payment Details</h6>
                <button className="btn btn-sm btn-outline-secondary"><i className="fa fa-chevron-right" /></button>
              </div>

              <div className="mt-4">
                <h5 className="mb-3">Payment Details</h5>
           
                {[
                  "Bill Number",
                  "Bill Date",
                  "Paid Amount",
                  "Paid Date",
                  "Due Date",
                  "Bank Transaction Ref",
                  "Total Amount",
                  "Tax Amount",
                  "Total Amount (GBP)",
                  "Tax Amount (GBP)",
                  "FX Rate"
                ].map((label, idx) => (
                  <div key={idx} className="mb-3">
                    <label className="form-label">{label}</label>
                    <input
                      type={label.includes("Date") ? "date" : "text"}
                      className="form-control"
                      defaultValue={label === "Paid Amount" ? "£ 1900.00" : ""}
                      disabled={label === "Paid Amount"}
                    />
                  </div>
                ))}

                <div className="mb-3">
                  <label className="form-label">Payment Mode</label>
                  <select className="form-select"><option>Select Payment Mode</option></select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Currency</label>
                  <select className="form-select"><option>Select Currency</option></select>
                </div>

     
                <h5 className="mb-3">Description</h5>
                <div className="mb-3">
                  <label className="form-label">Line Item</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="lineItem" id="single" defaultChecked />
                    <label className="form-check-label" htmlFor="single">Single</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="lineItem" id="multiple" />
                    <label className="form-check-label" htmlFor="multiple">Multiple</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" placeholder="Enter Description"></textarea>
                </div>

                <button className="btn btn-primary w-100">Save</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ModalPop
        show={modal}
        handleClose={() => setModal(false)}
      />
    </div>

  );
};

export default Dashboard;
