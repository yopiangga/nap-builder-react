import { FiUploadCloud } from "react-icons/fi";
import { TableComponent } from "./table";
import { TextComponent } from "./text";

export function NAPPage() {
  return (
    <div className="w-full flex justify-center min-h-screen bg-gray-100 text-slate-900 pb-20">
      <div className="w-8/12">
        <br />
        <h1 className="text-4xl font-bold text-center mt-8">NAP Builder</h1>
        <p className="text-center mt-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <br />

        <div className="mt-5">
          <div className="bg-white rounded-xl p-5 pb-10">
            <div className="flex flex-col justify-center items-center bg-gray-100 rounded-xl text-center p-5 py-12 relative">
              <div>
                <FiUploadCloud className="text-5xl text-slate-900" />
              </div>
              <h4 className="font-bold text-lg mt-3">Upload your documents</h4>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-slate-900 text-white text-center rounded-full py-3 px-5 absolute -bottom-5">
                Upload Documents
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <TextComponent />

          <div class="relative overflow-x-auto sm:rounded-lg mt-10">
            <TableComponent />
          </div>

          <div class="relative overflow-x-auto sm:rounded-lg mt-5">
            <TableComponent />
          </div>

          <br />
          <br />
          <TextComponent />
        </div>
      </div>
    </div>
  );
}
