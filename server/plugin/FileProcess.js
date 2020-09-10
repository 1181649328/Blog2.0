module.exports = (app, auth) => {
  const multer = require("multer");
  const MAO = require("multer-aliyun-oss");

  const upload = multer({
    storage: MAO({
      config: {
        region: process.env.region,
        accessKeyId: process.env.accessKeyId,
        accessKeySecret: process.env.accessKeySecret,
        bucket: process.env.bucket,
        // secure: true,
      },
    }),
  });

  app.post("/api/upload", auth, upload.single("file"), async (req, res) => {
    const file = req.file;
    res.send(file);
  });
};
