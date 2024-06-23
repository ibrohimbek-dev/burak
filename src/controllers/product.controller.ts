import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors from "../libs/Errors";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService()

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
	try {
		console.log("(product.controller.ts) getAllProducts");
		res.render("products");
	} catch (err) {
		console.log("(product.controller.ts) error on getAllProducts");
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

productController.createNewProduct = async (req: Request, res: Response) => {
	try {
    console.log("(product.controller.ts) createNewProduct");
    res.send("DONE!")
	} catch (err) {
		console.log("(product.controller.ts) error on createNewProduct");
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
	try {
		console.log("(product.controller.ts) updateChosenProduct");
	} catch (err) {
		console.log("(product.controller.ts) error on updateChosenProduct");
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

export default productController;
