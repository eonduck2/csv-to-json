const csv = require("csv-parser");
const fs = require("fs");
const iconv = require("iconv-lite");
const results = [];

fs.createReadStream("./elecCar.csv")
  .pipe(iconv.decodeStream(`euc-kr`))
  .pipe(csv())
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    fs.writeFileSync(
      `./createdJson.json`,
      JSON.stringify(results, null, 2),
      `utf-8`
    );
  });

csv({ separator: "\t" });
