export default function handler(req, res) {
  console.log("📩 Log from React project API:", new Date().toISOString());
  res.status(200).json({ message: "Test log written from React project" });
}
