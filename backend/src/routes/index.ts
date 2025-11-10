import { Router } from "express";
import { db } from "../config/firebase";
import tripRoutes from "./trip.routes";

const router = Router();

router.get("/health", async (req, res) => {
  try {
    await db.listCollections();
    res.json({ status: "ok", firebase: true });
  } catch (e) {
    res.status(500).json({ status: "error", firebase: false });
  }
});

router.use("/trips", tripRoutes);

export default router;
