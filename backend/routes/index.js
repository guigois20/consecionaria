import { Router } from "express";
import userroute from "../domains/users/routes.js";
import placeroute from "../domains/places/router.js";

const router = Router();

router.use("/users", userroute);
router.use("/places", placeroute);

export default router;
