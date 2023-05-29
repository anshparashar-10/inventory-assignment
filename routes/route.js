import express from "express";
import {
  addData,
  getData,
  getDat,
  editdata,
  deleteData,
} from "../controller/dataController.js";

const router = express.Router();

router.post("/add", addData);
router.get("/", getData);
router.get("/:id", getDat);
router.put("/:id", editdata);
router.delete("/:id", deleteData);

export default router;
