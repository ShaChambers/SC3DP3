const db = require("../config/connection");
const { User, History } = require("../models");
const userSeeds = require("./userSeeds.json");
const historySeeds = require("./historySeeds.json");

db.once("open", async () => {
  try {
    await User.create(userSeeds);

    for (let i = 0; i < historySeeds.length; i++) {
      const { _id, person } = await History.create(historySeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: person },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
