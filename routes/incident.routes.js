const Incident = require("../models/Incident");
const { Router } = require("express");
const express = require("express");
const jsonParser = express.json();

const router = Router();

// /api/incidents
router.post("", async (req, res) => {
  try {
    const {
      incidentTitle,
      assignee,
      area,
      startDate,
      dueDate,
      description,
      priority,
      status,
    } = req.body;

    const incident = new Incident({
      incidentTitle,
      assignee,
      area,
      startDate,
      dueDate,
      description,
      priority,
      status,
    });

    await incident.save();

    return res.status(201).json({ message: "incidents has been created" });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong. Try again" });
  }
});

// /api/incidents
router.get("", async (req, res) => {
  try {
    const incidents = await Incident.find({});
    return res.json(incidents);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong. Try again" });
  }
});

// /api/incidents/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Incident.findByIdAndDelete(id, (err, docs) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        console.log("Deleted : ", docs);
      }
    });
    return res.json({ message: "incidents has been deleted" });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong. Try again" });
  }
});

// /api/incidents/:id
router.put("/:id", jsonParser, async (req, res) => {
  try {
    const {
      _id,
      incidentTitle,
      assignee,
      area,
      startDate,
      dueDate,
      description,
      priority,
      status,
    } = req.body;
    const newIncident = {
      incidentTitle,
      assignee,
      area,
      startDate,
      dueDate,
      description,
      priority,
      status,
    };

    await Incident.findByIdAndUpdate({ _id }, newIncident, { new: true }, function (err) {
      if (err) return res.status(500).json({ message: err });
    });
    return res.json({ message: "incidents has been edited" });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong. Try again" });
  }
});

module.exports = router;
