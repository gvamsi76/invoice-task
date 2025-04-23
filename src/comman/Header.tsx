import React from 'react'

function Header() {
    return (
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
    )
}

export default Header