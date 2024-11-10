import { Router } from "express";
import languageController from "./language.controller";
import { validate } from "../../middleware/validate";
import { languageSchema } from "./language.schemas";

const router = Router();

router.post("/", validate(languageSchema), languageController.changeLanguage);

export default router;
