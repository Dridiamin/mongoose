const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.connect('mongodb://127.0.0.1:27017/checkmongoose');

// schema
const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    favoriteFoods: {
      type: [String],
    },
  });

  //create and Save model
const Person = mongoose.model("Person", personSchema);

const createPerson = async () => {
  const person = await Person.create({
    name: "Mohamed",
    age: 29,
    favoriteFoods: ["pizza", "burger"],
  });
  try {
    const result = await person.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

// Create Many Records with model.create()
const createPersonnes = async (personnes) => {
    try {
      const result = await Person.find(personnes);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  createPersonnes([
    {
      name: "person1",
      age: 25,
      favoriteFoods: ["couscous"],
    },
    {
      name: "person3",
      age: 30,
      favoriteFoods: ["gateau", "sandwich"],
    },
  ]);
  createPersonnes();

  //find model
const findPerson = async (person) => {
    try {
      const result = await Person.find({ name: person });
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  findPerson("person2");

  // model.findOne()
const findOnePerson = async (food) => {
    try {
      const result = await Person.findOne({ favoriteFoods: food });
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  // find by id
  