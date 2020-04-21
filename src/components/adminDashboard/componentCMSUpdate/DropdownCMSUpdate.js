import React, { useState } from 'react'
import Axios from 'axios';

function DropdownCMSUpdate(props) {
    const stateCMS = {
        title: "",
        category: "",
        description: "",
    };
    
    const [dataCMS, setDataCMS] = useState(stateCMS);
    
    const handleChangeCMS = (e) => {
        setDataCMS({
            ...dataCMS,
            [e.target.name]: e.target.value,
        });
    };
    
    const onSubmitCMS = (e) => {
        e.preventDefault();
        Axios({
            url: `${props.baseURL}/cms/`,
            method: "POST",
            headers: {
            admintoken: localStorage.getItem("admincodeotoken"),
            },
            data: {
            title: dataCMS.title,
            category: dataCMS.category,
            description: dataCMS.description,
            },
        }).then((res) => {
            alert("SUCCESS");
        }).catch((err) => {
            alert(JSON.stringify(err));
        });
    };

    return (
        <div
        className="modal fade bs-example-modal-lg"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myLargeModalLabel">
                    Add News
                    </h5>
                    <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    >
                    ×
                    </button>
                </div>
                <div className="modal-body">
                    <form method="post" onSubmit={onSubmitCMS}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="Title">Title</label>
                            <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="Title"
                            onChange={handleChangeCMS}
                            required
                            />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="status-select" className="mr-2">
                            Category
                            </label>
                            <select
                            className="custom-select"
                            name="category"
                            id="status-select"
                            onChange={handleChangeCMS}
                            >
                            <option selected>Choose Category</option>
                            <option value="Wallet">Wallet</option>
                            <option value="HomePage">Homepage</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <textarea
                            className="form-control"
                            name="description"
                            id="Description"
                            defaultValue={""}
                            onChange={handleChangeCMS}
                            />
                        </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-sm btn-gradient-primary">
                        Save
                    </button>
                    <button type="button" className="btn btn-sm btn-gradient-danger">
                        Delete
                    </button>
                    </form>
                </div>
                </div>
                {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
        </div>
    )
}

export default DropdownCMSUpdate