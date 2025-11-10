import { Request, Response } from "express";
import { db } from "../config/firebase";
import { Trip } from "../models/trip.model";

const COLLECTION = "trips";

export async function createTrip(req: Request, res: Response) {
  try {
    const { title, description, price, imageUrl } = req.body as Partial<Trip>;
    if (!title || typeof price !== "number") {
      return res.status(400).json({ message: "title and price are required" });
    }

    const now = Date.now();
    const data: Omit<Trip, "id"> = {
      title,
      description,
      price,
      imageUrl,
      createdAt: now,
      updatedAt: now,
    };

    const ref = await db.collection(COLLECTION).add(data);
    const doc = await ref.get();
    return res.status(201).json({ id: ref.id, ...(doc.data() as object) });
  } catch (e) {
    return res.status(500).json({ message: "Failed to create trip" });
  }
}

export async function listTrips(req: Request, res: Response) {
  try {
    const snap = await db
      .collection(COLLECTION)
      .orderBy("createdAt", "desc")
      .get();
    const trips = snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) }));
    return res.json(trips);
  } catch (e) {
    return res.status(500).json({ message: "Failed to list trips" });
  }
}

export async function getTrip(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const doc = await db.collection(COLLECTION).doc(id).get();
    if (!doc.exists) return res.status(404).json({ message: "Not found" });
    return res.json({ id: doc.id, ...(doc.data() as object) });
  } catch (e) {
    return res.status(500).json({ message: "Failed to get trip" });
  }
}

export async function updateTrip(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const payload = req.body as Partial<Trip>;
    payload.updatedAt = Date.now();

    const ref = db.collection(COLLECTION).doc(id);
    const doc = await ref.get();
    if (!doc.exists) return res.status(404).json({ message: "Not found" });

    await ref.update(payload);
    const updated = await ref.get();
    return res.json({ id: updated.id, ...(updated.data() as object) });
  } catch (e) {
    return res.status(500).json({ message: "Failed to update trip" });
  }
}

export async function deleteTrip(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const ref = db.collection(COLLECTION).doc(id);
    const doc = await ref.get();
    if (!doc.exists) return res.status(404).json({ message: "Not found" });
    await ref.delete();
    return res.status(204).send();
  } catch (e) {
    return res.status(500).json({ message: "Failed to delete trip" });
  }
}
