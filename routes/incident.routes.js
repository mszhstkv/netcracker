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

    return res.status(201).json({ message: "Incident has been created" });
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
    Incident.findByIdAndDelete(id, (err, docs) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        console.log("Deleted : ", docs);
      }
    });
    return res.json({ message: "Incident has been deleted" });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong. Try again" });
  }
});

// /api/incidents/:id
router.put("/:id", jsonParser, async (req, res) => {
  try {
    const _id = req.body._id;
    const incidentTitle = req.body.incidentTitle;
    const assignee = req.body.assignee;
    const area = req.body.area;
    const startDate = req.body.startDate;
    const dueDate = req.body.dueDate;
    const description = req.body.description;
    const priority = req.body.priority;
    const status = req.body.status;

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

    Incident.updateOne({ _id }, newIncident, { new: true }, function (err) {
      if (err) return res.status(500).json({ message: err });
    });
    return res.json({ message: "Incident has been edited" });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong. Try again" });
  }
});

module.exports = router;
