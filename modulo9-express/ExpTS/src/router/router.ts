import { Router } from "express";
import * as mainController from '../controllers/main'
import produtoController from '../controllers/produto';



const router = Router();


//main controler
router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/profs", mainController.profs);
router.get("/hb1", mainController.hb1);
router.get("/hb2", mainController.hb2);
router.get("/hb3", mainController.hb3);
router.get("/hb4", mainController.hb4);
router.get("/lorem", mainController.lorem);
router.get("/bem-vindo/:nome", mainController.bemVindo);

// produto controler

router.get("/produtos", produtoController.index);
router.all('/produtos/create',produtoController.create);
router.get("/produtos/:id", produtoController.read);
router.all('/produtos/update/:id', produtoController.update); 
router.all('/produtos/delete/:id', produtoController.remove);



export default router;
