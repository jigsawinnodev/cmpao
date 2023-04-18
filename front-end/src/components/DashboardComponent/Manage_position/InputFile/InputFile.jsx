import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./InputFile.css";

import { ImageConfig } from "./config/imgConfig";
import uploadImg from "../../../../assets/img/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };
  useEffect(() => {
    const updatedList = [...fileList, props.file];
    setFileList(updatedList);
    props.onFileChange(updatedList);
  }, []);
  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <div className="row">
            {fileList.map((item, index) => (
              <div className="col-md-12 px-5" key={index}>
                <div className="row px-5">
                  <div className="col-md-1">
                    <img
                      className="img-fluid"
                      src={ImageConfig["pdf"]}
                      alt=""
                    />
                  </div>
                  <div className="col-md-10 my-auto text-start">
                    {/* {item.split("/")[5] ? (
                      <a
                        href={item}
                        className="text-decoration-none"
                        target="_blank"
                      >
                        <p className="m-0">{item.split("/")[5]}</p>
                      </a>
                    ) : (
                      ""
                    )}
                    {item.name ? <p className="m-0">{item.name}</p> : ""} */}
                  </div>

                  <div className="col-md-1 my-auto">
                    <i className="bi bi-trash"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
