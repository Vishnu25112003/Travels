import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK using environment variables or ADC
function initFirebaseAdmin() {
  if (admin.apps.length) return admin.app();

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "").replace(
    /\\n/g,
    "\n",
  );

  if (projectId && clientEmail && privateKey) {
    return admin.initializeApp({
      credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
    });
  }

  // Fallback to Application Default Credentials if available
  return admin.initializeApp();
}

const app = initFirebaseAdmin();
export const db = getFirestore(app);

export async function verifyFirestoreConnection(): Promise<boolean> {
  try {
    // A lightweight call that will throw if not authenticated
    await db.listCollections();
    return true;
  } catch (err) {
    return false;
  }
}
