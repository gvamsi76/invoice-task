import React from "react";
import { Container, Row, Col, Button, Form, Card, ListGroup } from "react-bootstrap";


const Dashboard: React.FC = () => {
  return (
    <div className="d-flex">

      <div className="sidebar sticky-top top-0">
        <h4>
        <img src="images/logo.png" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
        </h4>
        <ul className="list-unstyled text-center">
          <li><a href="#">
            <div className="icon">
              <i className="fa-solid fa-home"></i>
            </div>
            Dashboard
          </a></li>
          <li><a href="#">
            <div className="icon">
              <i className="fa-regular fa-circle-user"></i>
            </div>
            Accounting
          </a></li>
        </ul>
      </div>
      <main className="w-100">
        <div className="col">
          <div className="row m-0 g-0">
            <div className="col-xl-9 ps-0">
              <div className="bg-white py-2 px-3">
                <div className="d-flex justify-content-between flex-wrap gap-2">
                  <div className="d-flex gap-3 align-items-center flex-wrap">
                    <h6 className="fw-bold">Review</h6>
                    <div>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Google</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="badge-btn success">
                      Quickbook's Data
                    </div>
                  </div>
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="badge-btn purple">
                      <i className="fa fa-search"></i>
                    </div>
                    <div className="badge-btn purple">
                      Export to Excel
                    </div>
                    <div className="badge-btn purple">
                      Add Document
                    </div>
                    <div>
                      <select className=" purple form-select" aria-label="Default select example">
                        <option selected>Connect</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="badge-btn purple">
                      <i className="fa-solid fa-bell"></i>
                    </div>
                    <div className="badge-btn purple">
                      <i className="fa-solid fa-gear"></i>
                    </div>
                    <div className="badge-btn purple">
                      <i className="fa-regular fa-circle-user"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 py-4 sticky-top top-0">
                <div className="card shadow-0 p-3 border-0 ">
                  <div className="d-flex justify-content-end mb-4">
                    <button className="btn btn-primary">Add to Expenses Report</button>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-disabled" type="button" role="tab"
                            aria-controls="pills-disabled" aria-selected="false" disabled>All
                            Documents</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="pills-home-tab"
                            data-bs-toggle="pill" data-bs-target="#pills-bill" role="tab"
                            aria-controls="pills-bill" aria-selected="true">Biils</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-Receipts-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Receipts" role="tab"
                            aria-controls="pills-Receipts"
                            aria-selected="false">Receipts</button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-bill" role="tabpanel"
                          aria-labelledby="pills-bill-tab" tabIndex={0}>
                          <div className="card">
                            <div className="card-body">
                              <ul className="list-group list-group-flush">
                                {/* <!-- Bill Items --> */}
                                <li className="list-group-item d-flex align-items-center">
                                  <img src="https://placehold.co/600x400" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
                                  <div>
                                    <a href="#" className="text-primary">Bill 1</a>
                                    <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                    <p className="mb-0">£ 50.59</p>
                                  </div>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                  <img src="https://placehold.co/600x400" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
                                  <div>
                                    <a href="#" className="text-primary">Bill 2</a>
                                    <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                    <p className="mb-0">£ 50.59</p>
                                  </div>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                  <img src="https://placehold.co/600x400" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
                                  <div>
                                    <a href="#" className="text-primary">Bill 3</a>
                                    <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                    <p className="mb-0">£ 50.59</p>
                                  </div>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                  <img src="https://placehold.co/600x400" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
                                  <div>
                                    <a href="#" className="text-primary">Bill 4</a>
                                    <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                    <p className="mb-0">£ 50.59</p>
                                  </div>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                  <img src="https://placehold.co/600x400" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
                                  <div>
                                    <a href="#" className="text-primary">Bill 5</a>
                                    <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                    <p className="mb-0">£ 50.59</p>
                                  </div>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                  <img src="https://placehold.co/600x400" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
                                  <div>
                                    <a href="#" className="text-primary">Bill 6</a>
                                    <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                    <p className="mb-0">£ 50.59</p>
                                  </div>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                  <img src="https://placehold.co/600x400" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
                                  <div>
                                    <a href="#" className="text-primary">Bill 7</a>
                                    <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                    <p className="mb-0">£ 50.59</p>
                                  </div>
                                </li>
                                <li className="list-group-item d-flex align-items-center">
                                  <img src="https://placehold.co/600x400" alt="Bill Icon"
                                    className="me-3 img-fluid bill-image" />
                                  <div>
                                    <a href="#" className="text-primary">Bill 8</a>
                                    <p className="mb-0 text-muted">Date: Nov 1, 2019</p>
                                    <p className="mb-0">£ 50.59</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="pills-Receipts" role="tabpanel"
                          aria-labelledby="pills-Receipts-tab" tabIndex={0}>
                          <div className="card">
                            <div className="card-body">
                              <h6 className="mb-0">No data available</h6>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="invoice-back">
                        <div className="bg-invoice">
                          <img src="images/invoice.png" className="img-fluid img-box" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="bg-white p-3">
                <div className="container mt-4">
                  <div className="card p-3 rounded-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src="https://placehold.co/40x40" alt="logo" className="rounded-circle me-2" />
                        <div>
                          <h6 className="mb-0 fw-bold">Quickbook</h6>
                          <small >16 June, 2024 | 8:15 PM</small>
                        </div>
                      </div>
                      <div>
                        <small className="text-muted fw-bold">Publishing...</small><br />
                        <small className="text-muted fw-bold">Jimmy Jason</small>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="autoSync" checked />
                        <label className="form-check-label checkbox-label" htmlFor="autoSync">Auto-sync</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="saveConfig" checked />
                        <label className="form-check-label checkbox-label" htmlFor="saveConfig">Save Config</label>
                      </div>
                    </div>
                  </div>

                  <ul className="nav nav-pills mt-3" id="pills-tab" role="tablist">

                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-Comment" role="tab"
                        aria-controls="pills-Comment" aria-selected="true">Comments</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-Query-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-Query" role="tab"
                        aria-controls="pills-Query"
                        aria-selected="false">Query</button>
                    </li>
                  </ul>

                  <div className="mt-3">
                    <label htmlFor="comment" className="form-label fw-bold text-muted">Type Comment</label>
                    <input type="text" className="form-control border-0" id="comment" placeholder="Start typing..." />
                  </div>

                  <button className="btn btn-light w-100 mt-3" disabled>Add Comment</button>
                  <button className="btn btn-primary w-100 mt-3">View Line Items</button>

                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="border-0 p-2 rounded-2 px-3"><i className="fa fa-chevron-left"></i></button>
                    <h6 className="mb-0">Payment Details</h6>
                    <button className="border-0 p-2 rounded-2 px-3"><i className="fa fa-chevron-right"></i></button>
                  </div>

                  <div className="mt-4">
                    <h5 className="mb-3">Payment Details</h5>
                    <div className="mb-3">
                      <label className="form-label">Status</label><br />
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="paymentStatus" id="paid" checked />
                        <label className="form-check-label" htmlFor="paid">Paid</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="paymentStatus" id="unpaid" />
                        <label className="form-check-label" htmlFor="unpaid">Unpaid</label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Bill Number</label>
                      <input type="text" className="form-control" placeholder="Start Typing" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Bill Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Paid Amount</label>
                      <input type="text" className="form-control" value="£ 1900.00" disabled />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Paid Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Due Date</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Payment Mode</label>
                      <select className="form-select">
                        <option selected>Select Payment Mode</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Currency</label>
                      <select className="form-select">
                        <option selected>Select Currency</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Bank Transaction Ref</label>
                      <input type="text" className="form-control" placeholder="Start Typing" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Total Amount</label>
                      <input type="text" className="form-control" placeholder="Start Typing" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Tax Amount</label>
                      <input type="text" className="form-control" placeholder="Start Typing" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Total Amount (GBP)</label>
                      <input type="text" className="form-control" placeholder="Start Typing" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Tax Amount (GBP)</label>
                      <input type="text" className="form-control" placeholder="Start Typing" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">FX Rate</label>
                      <input type="text" className="form-control" placeholder="Start Typing" />
                    </div>

                    <h5 className="mb-3">Description</h5>
                    <div className="mb-3">
                      <label className="form-label">Line Item</label><br />
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="lineItem" id="single" checked />
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
