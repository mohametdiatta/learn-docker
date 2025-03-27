const express = require("express");

const app = express();

const Tasks = [
  {
    uid: "PP-T-7312317",
    type: "Pickup",
    _id: "66cfba007b07a40002a5f039",
    status: "Unassigned",
    recipient: null,
    receiver: null,
    service: "NT",
    address: {
      _id: null,
      place_id: "ChIJCzR8c1JtwQ4R7TtBPVlYcD8",
      city: "Ouakam",
      address: "Ouakam, Dakar Region, Senegal",
      location: {
        latitude: 14.7237121,
        longitude: -17.4942333,
        __typename: "Location",
      },
      __typename: "Address",
    },
    operationOnParcels: null,
    pickedItems: null,
    deliveredItems: null,
    runsheet: {
      client: {
        contactFirstname: "Aziz",
        contactLastname: "THIOUNE",
        __typename: "Client",
      },
      __typename: "Runsheet",
    },
    __typename: "Task",
  },
  {
    uid: "PP-T-6424330",
    type: "Unknown",
    _id: "66cfba007b07a40002a5f03a",
    status: "Unassigned",
    recipient: null,
    receiver: null,
    service: "TR",
    address: {
      _id: null,
      place_id: "ChIJU3pVJiETwQ4RY-v7sub8HbI",
      city: "Ngor",
      address: "Deux Mamelles, Dakar Region, Senegal",
      location: {
        latitude: 14.740833,
        longitude: -17.53,
        __typename: "Location",
      },
      __typename: "Address",
    },
    operationOnParcels: null,
    pickedItems: null,
    deliveredItems: null,
    runsheet: {
      client: {
        contactFirstname: "Aziz",
        contactLastname: "THIOUNE",
        __typename: "Client",
      },
      __typename: "Runsheet",
    },
    __typename: "Task",
  },
  {
    uid: "PP-T-6690371",
    type: "Unknown",
    _id: "66cfba007b07a40002a5f03b",
    status: "Unassigned",
    recipient: null,
    receiver: null,
    service: "MSG",
    address: {
      _id: null,
      place_id: "ChIJl8NUa64SwQ4RPGw51jctuFY",
      city: "Dakar",
      address: "Almadies, Région de Dakar, Senegal",
      location: {
        latitude: 14.7435719,
        longitude: -17.51179,
        __typename: "Location",
      },
      __typename: "Address",
    },
    operationOnParcels: null,
    pickedItems: null,
    deliveredItems: null,
    runsheet: {
      client: {
        contactFirstname: "Aziz",
        contactLastname: "THIOUNE",
        __typename: "Client",
      },
      __typename: "Runsheet",
    },
    __typename: "Task",
  },
  {
    uid: "PP-T-7270090",
    type: "Unknown",
    _id: "66cfba007b07a40002a5f03c",
    status: "Unassigned",
    recipient: null,
    receiver: null,
    service: "MSG",
    address: {
      _id: null,
      place_id: "ChIJtfwrb90SwQ4R0t80rIWd3-U",
      city: "Ngor",
      address: "Ngor, Dakar Region, Senegal",
      location: {
        latitude: 14.7441621,
        longitude: -17.5120556,
        __typename: "Location",
      },
      __typename: "Address",
    },
    operationOnParcels: null,
    pickedItems: null,
    deliveredItems: null,
    runsheet: {
      client: {
        contactFirstname: "Aziz",
        contactLastname: "THIOUNE",
        __typename: "Client",
      },
      __typename: "Runsheet",
    },
    __typename: "Task",
  },
];
app.get("/", (req, res) => {
  return res.json(Tasks);
});
app.get("/tasks", (req, res) => {
  return res.json(Tasks);
});
app.get("/tasks/:id", (req, res) => {
  const task = Tasks.find((task) => task._id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  return res.json(task);
});

app.listen(3000, () => {
  console.log("app runnig on http//:localhost:3000");
});
