const router = require("express").Router();

const {Router} = require("express");

const Weed = require("../models/Weed");

const placeSeed = [
    {
      name: "Grand Daddy Purple",
      img: "https://www.leafnation.store/wp-content/uploads/2020/07/granddaddy-purp.jpg",
      strain: "Indica"
    },
    {
      name: "OG Kush",
      img: "https://237995-729345-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/OG_KUSH.jpg",
      strain: "Hybrid"
    },
    {
      name: "Green Crack",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStd_c1YlPsXyXpT7mOl01k64M9AtomLuCSOA&usqp=CAU",
      strain: "Sativa"
    }
  ];

  // SEED
  router.get("/seed", async (req, res) => {
      try {
          await Weed.remove({});
          await Weed.create(placeSeed);
          const weeds = await Weed.find({});
          res.json(weeds);
      } catch (error) {
          res.status(400).json(error);
      }
  });

  // INDEX
  router.get("/", async (req, res) => {
      try {
        const weeds = await Weed.find({});
        res.json(weeds);
      } catch (error) {
          res.status(400).json(error);
      }
  });

  // CREATE
  router.post("/", async (req, res) => {
      try {
          const newWeed = await Weed.create(req.body);
          res.json(newWeed);
      } catch (error) {
          res.status(400).json(error);
      }
  });

  // UPDATE
  router.put("/:id", async (req, res) => {
      try {
          const updatedWeed = await Weed.findByIdAndUpdate(
              req.params.id,
              req.body,
              {new: true}
          );
          res.json(updatedWeed);
      } catch (error) {
          res.status(400).json(error);
      }
  });

  // DELETE
  router.delete("/:id", async (req, res) => {
      try {
          const deletedWeed = await Weed.findByIdAndRemove(req.params.id);
          res.json(deletedWeed);
      } catch (error) {
          res.status(400).json(error);
      }
  });

module.exports = router;