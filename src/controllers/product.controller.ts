import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from "../libs/Errors";
import ProductService from "../models/Product.service";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductInput, ProductInquiry } from "../libs/types/product";
import { ProductCollection } from "../libs/enums/product.enum";

const productService = new ProductService();

const productController: T = {};

// SPA -----------------------------------
productController.getProducts = async (req: Request, res: Response) => {
	try {
		const { page, limit, order, productCollection, search } = req.query;

		const inquiry: ProductInquiry = {
			order: String(order),
			page: Number(page),
			limit: Number(limit),
		};

		if (productCollection) {
			inquiry.productCollection = productCollection as ProductCollection;
		}

		if (search) {
			inquiry.search = String(search);
		}

		const result = await productService.getProducts(inquiry);

		res.status(HttpCode.OK).json(result);
	} catch (err) {
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

productController.getProduct = async (req: ExtendedRequest, res: Response) => {
	try {		
		// First method to get params:
		// const id: string = req.params.id;

		// Second method to get params:
		const { id } = req.params;
		const memberId = req.member?._id ?? null;
		const result = await productService.getProduct(memberId, id);
		console.log("SPA => getProduct req.member =>", req.member);

		res.status(HttpCode.OK).json(result);
	} catch (err) {
		console.log("SPA => Error on getProduct not 's'");
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

// SSR -----------------------------------

productController.getAllProducts = async (req: Request, res: Response) => {
	try {
		const productsData = await productService.getAllProducts();
		res.render("products", { productsData: productsData });
	} catch (err) {
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

productController.createNewProduct = async (
	req: AdminRequest,
	res: Response
) => {
	try {
		if (!req.files?.length) {
			throw new Errors(
				HttpCode.INTERNAL_SERVER_ERROR,
				Message.FAILED_UPLOADING_IMAGE
			);
		}

		const data: ProductInput = req.body;
		data.productImages = req.files?.map((ele) => {
			return ele.path.replace(/\\/g, "/");
		});
		await productService.createNewProduct(data);

		res.send(
			`<script>alert('${"successfully product created"}'); window.location.replace("/admin/product/all")</script>`
		);
	} catch (err) {
		const message =
			err instanceof Errors ? err.message : Message.PRODUCT_CREATION_FAILED;

		res.send(
			`<script>alert('${message}'); window.location.replace("/admin/product/all")</script>`
		);
	}
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
	try {
		const productId = req.params.id;
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

		res.status(HttpCode.OK).json({ productsData: result });
	} catch (err) {
		console.log("(product.controller.ts) error on updateChosenProduct");
		if (err instanceof Errors) res.status(err.code).json(err);
		else res.status(Errors.standard.code).json(Errors.standard);
	}
};

export default productController;
