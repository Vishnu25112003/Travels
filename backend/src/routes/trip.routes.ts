import { Router } from "express";
import {
  createTrip,
  listTrips,
  getTrip,
  updateTrip,
  deleteTrip,
} from "../controllers/trip.controller";

const router = Router();

router.post("/", createTrip);
router.get("/", listTrips);
router.get("/:id", getTrip);
router.put("/:id", updateTrip);
router.delete("/:id", deleteTrip);

export default router;
