import axios from "axios";

const url = "http://localhost:5000/";

export class ExtractDocumentService {
  async extractDocument() {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      return "Error: " + err.message;
    }
  }
}
