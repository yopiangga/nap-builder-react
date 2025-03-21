import { TableComponent } from "./table";
import { TextComponent } from "./text";
import { UploadComponent } from "./upload";

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
          <UploadComponent />
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
