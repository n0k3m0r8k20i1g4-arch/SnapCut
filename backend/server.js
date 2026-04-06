const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// テスト
app.get("/", (req, res) => {
  res.send("SnapCut API running");
});

// ファイルアップロード
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "Upload successful",
    file: req.file
  });
});

// 動画生成（ダミー）
app.post("/generate", (req, res) => {
  const { text } = req.body;

  // ここに将来AI動画生成入れる
  res.json({
    message: "Video generated",
    preview: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    text
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
