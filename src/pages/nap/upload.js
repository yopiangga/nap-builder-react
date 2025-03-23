import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";

export function UploadComponent({ handleUpload }) {
  const [files, setFiles] = useState([]);

  const handleCheckUpload = (e) => {
    e.preventDefault();

    handleUpload(files);
  };

  return (
    <div className="bg-white rounded-xl p-5 pb-10">
      <form onSubmit={handleCheckUpload}>
        <input
          id="documents"
          className=""
          type="file"
          onChange={(e) => setFiles(e.target.files)}
          hidden
          multiple
        />
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-xl text-center p-5 py-6 relative">
          <label
            htmlFor="documents"
            className="text-center justify-center flex flex-col items-center w-full cursor-pointer py-6"
          >
            <div>
              <FiUploadCloud className="text-5xl text-slate-900" />
            </div>
            <h4 className="font-bold text-lg mt-3">Upload your documents</h4>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </label>

          <div className="w-full flex justify-center flex-wrap gap-2">
            {[...files].map((e) => {
              return (
                <div className="flex flex-col w-40 p-5 rounded-lg bg-white border-2 border-slate-600 justify-center items-center overflow-hidden">
                  <FaFilePdf size={36} />
                  <p className="text-sm mt-2 line-clamp-2">{e.name}</p>
                </div>
              );
            })}
          </div>
          <br />
          <button className="bg-slate-900 hover:bg-slate-800 duration-150 text-white text-center rounded-full py-3 px-5 absolute -bottom-5">
            Upload Documents
          </button>
        </div>
      </form>
    </div>
  );
}
