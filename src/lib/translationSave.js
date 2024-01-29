const https = require("https");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

function fetchDataAndSave() {
  const apiUrl = `https://translations.trustup.io/storage/translations/${process.env.NUXT_PUBLIC_APP_NAME}.json`;

  const req = https.get(apiUrl, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const publicFolderPath = path.join(process.cwd(), "public");
        if (!fs.existsSync(publicFolderPath)) {
          fs.mkdirSync(publicFolderPath);
        }

        const filePath = path.join(
          publicFolderPath,
          `${process.env.NUXT_PUBLIC_APP_NAME}.json`,
        );
        fs.writeFileSync(filePath, data);
      } catch (error) {
        console.error("Error saving data:", error.message);
        process.exit(1);
      }
    });
  });
  req.on("error", (error) => {
    console.error("Error fetching data:", error.message);
    process.exit(1);
  });
}

fetchDataAndSave();
