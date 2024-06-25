import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from "../libs/Errors";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";

const productService = new ProductService();

const productController: T = {};

// SPA -----------------------------------
// SSR -----------------------------------

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

productController.createNewProduct = async (
	req: AdminRequest,
	res: Response
) => {
	try {
		if (!req.files?.length)
			throw new Errors(
				HttpCode.INTERNAL_SERVER_ERROR,
				Message.FAILED_UPLOADING_IMAGE
			);

		const data: ProductInput = req.body;
		data.productImages = req.files?.map((ele) => {
			return ele.path.replace(/\\/g, "/");
		});

		console.log("(product.controller.ts) createNewProduct:", data);

		await productService.createNewProduct(data);

		res.send(
			`<script>alert('${"successfully product created"}'); window.location.replace("admin/product/all")</script>`
		);
	} catch (err) {
		console.log("(product.controller.ts) error on createNewProduct");

		const message =
			err instanceof Errors ? err.message : Message.PRODUCT_CREATION_FAILED;

		res.send(
			`<script>alert('${message}'); window.location.replace("admin/product/all")</script>`
		);
	}
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
	try {
		const productId = req.params.productId;
		console.log(
			"(product.controller.ts) updateChosenProduct productId:",
			productId
		);

		// data tarkibida hech qanday o'zgartish qilmayotganligimiz uchun,
		// req.body'ni to'g'ridan - to'g'ri Product Model'ga yubormoqdamiz
		const result = await productService.updateChosenProduct(
			productId,
			req.body
		);

		res.status(HttpCode.OK).json({ productData: result });
	} catch (err) {
		console.log("(product.controller.ts) error on updateChosenProduct");
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

export default productController;
