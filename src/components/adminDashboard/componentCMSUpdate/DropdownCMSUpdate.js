import React, { useState } from "react";
import Axios from "axios";

// import Editor from "suneditor-react";
import { Editor } from "@tinymce/tinymce-react";
import "suneditor/dist/css/suneditor.min.css";

function DropdownCMSUpdate(props) {
  const stateCMS = {
    title: "",
    category: "",
  };
  const [cmsDescription, setCmsDescription] = React.useState("");

  const [dataCMS, setDataCMS] = useState(stateCMS);

  const handleChangeCMS = (e) => {
    setDataCMS({
      ...dataCMS,
      [e.target.name]: e.target.value,
    });
  };

  const textareaChangeCMS = (content) => {
    setCmsDescription(content);
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
        description: cmsDescription,
      },
    })
      .then((res) => {
        alert("SUCCESS");
      })
      .catch((err) => {
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
                    {/* <textarea
                                className="form-control"
                                name="description"
                                id="Description"
                                defaultValue={""}
                                onChange={handleChangeCMS}
                                /> */}
                    {/* <Editor setDefaultStyle="background:#1C233F;boxShadow:none;border:none" onChange={textareaChangeCMS} /> */}
                    {/* <textarea id="elm1" name="area"></textarea> */}
                    <Editor
                      apiKey="chxscu1qcw8c6h2259zzh52crat4atk70efg91t7pga7a7eg"
                      // initialValue=""
                      init={{
                        theme: "silver",
                        height: 300,
                        menubar: false,
                        plugins: [
                          "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                          "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                          "save table contextmenu directionality emoticons template paste textcolor",
                        ],
                        toolbar:
                          "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
                        content_style: "body{color: #8997bd;}",
                        style_formats: [
                          { title: "Bold text", inline: "strong" },
                          {
                            title: "Red text",
                            inline: "span",
                            styles: { color: "#ff0000" },
                          },
                          {
                            title: "Red header",
                            block: "h1",
                            styles: { color: "#ff0000" },
                          },
                          {
                            title: "Example 1",
                            inline: "span",
                            classes: "example1",
                          },
                          {
                            title: "Example 2",
                            inline: "span",
                            classes: "example2",
                          },
                          { title: "Table styles" },
                          {
                            title: "Table row 1",
                            selector: "tr",
                            classes: "tablerow1",
                          },
                        ],
                      }}
                      onEditorChange={textareaChangeCMS}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-sm btn-gradient-primary float-right mr-1"
              >
                <i class="far fa-save"></i> Save
              </button>
            </form>
          </div>
        </div>
        {/* /.modal-content */}
      </div>
      {/* /.modal-dialog */}
    </div>
  );
}

export default DropdownCMSUpdate;
