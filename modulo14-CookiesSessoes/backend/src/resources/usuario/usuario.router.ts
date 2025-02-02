import { Router } from "express";
import usuarioController from "./usuario.controller";
import { validate } from "../../middleware/validate";
import { usuarioSchema } from "./usuario.schema";

const router = Router();

router.get("/", usuarioController.index);
router.post("/", validate(usuarioSchema), usuarioController.create);
router.get("/:id", usuarioController.read);
router.put("/:id", validate(usuarioSchema), usuarioController.update);
router.delete("/:id", usuarioController.remove);

export default router;
