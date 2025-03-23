import { useEffect, useState } from "react";
import { LoaderComponent } from "../../components/loader";
import { TableComponent } from "./table";
import { TextComponent } from "./text";
import { UploadComponent } from "./upload";
import { ExtractDocumentService } from "../../services/extract-document";

export function NAPPage() {
  const [loading, setLoading] = useState("");
  const extractDocumentServices = new ExtractDocumentService();

  const [extractedData, setExtractedData] = useState({
    data: [],
    descriptive: [],
  });

  useEffect(() => {}, []);

  function handleExtractDocument(files) {
    extractDocumentServices.extractDocument().then((res) => {
      setExtractedData(res);

      console.log(res);
    });
  }

  return (
    <div className="w-full flex justify-center min-h-screen bg-gray-100 text-slate-900 pb-20">
      {loading != "" ? <LoaderComponent message={loading} /> : ""}
      <div className="w-8/12">
        <br />
        <h1 className="text-4xl font-bold text-center mt-8">NAP Builder</h1>
        <p className="text-center mt-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <br />

        <div className="mt-5">
          <UploadComponent handleUpload={handleExtractDocument} />
        </div>

        <div className="mt-10">
          <TextComponent />

          {extractedData.data.length > 0
            ? extractedData.data.map((e) => {
                return (
                  <div className="relative overflow-x-auto sm:rounded-lg mt-10">
                    <TableComponent
                      field={[
                        "title",
                        "value_year_2020",
                        "value_year_2021",
                        "value_year_2022",
                      ]}
                      data={e}
                    />
                  </div>
                );
              })
            : ""}

          <br />
          <br />
          {extractedData.descriptive.length > 0
            ? extractedData.descriptive.map((e) => {
                return (
                  <div className="relative overflow-x-auto sm:rounded-lg mt-4">
                    <TextComponent
                      title={e.title}
                      description={e.description}
                      reference={e.reference}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
