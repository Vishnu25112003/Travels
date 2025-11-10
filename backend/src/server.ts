import "dotenv/config";
import app from "./app";
import { verifyFirestoreConnection } from "./config/firebase";

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

async function start() {
  const ok = await verifyFirestoreConnection();
  if (ok) {
    console.log("Firebase Firestore connected.");
  } else {
    console.error("Failed to connect to Firebase. Check your credentials.");
  }

  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

start();
