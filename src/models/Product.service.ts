import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import {
	Product,
	ProductInput,
	ProductInquiry,
	ProductUpdateInput,
} from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
	private readonly productModel;

	constructor() {
		this.productModel = ProductModel;
	}

	// SPA ---------------------------------------------
	public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
		console.log("inquiry =>", inquiry);

		const match: T = { productStatus: ProductStatus.PROCESS };

		if (inquiry.productCollection) {
			match.productCollection = inquiry.productCollection;
		}

		if (inquiry.search) {
			match.productName = { $regex: new RegExp(inquiry.search, "i") };
		}

		const sort: T =
			inquiry.order === "productPrice"
				? { [inquiry.order]: 1 }
				: { [inquiry.order]: -1 };

		// TODO: Savol = Dollar qo'yish orqalik biz aggregation'ni methodlarini chaqirib olyapmizmi?
		const result = await this.productModel
			.aggregate([
				{ $match: match }, // find product
				{ $sort: sort }, // sort product
				{ $skip: (inquiry.page * 1 - 1) * inquiry.limit }, // skip product from 0
				{ $limit: inquiry.limit * 1 }, // to 3
			])
			.exec();

		// Shu qismiga keldim => 54: 45

		if (!result) {
			throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
		}

		return result;
	}

	// SSR ---------------------------------------------

	public async getAllProducts(): Promise<Product[]> {
		const result = await this.productModel.find().exec();
		if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

		return result;
	}

	public async createNewProduct(input: ProductInput): Promise<Product> {
		try {
			return await this.productModel.create(input);
		} catch (err) {
			console.error("Error on model:createNewProduct:", err);
			throw new Errors(HttpCode.BAD_REQUEST, Message.PRODUCT_CREATION_FAILED);
		}
	}

	public async updateChosenProduct(
		productId: string,
		input: ProductUpdateInput
	): Promise<Product> {
		// string => ObjectId
		productId = shapeIntoMongooseObjectId(productId);

		const result = await this.productModel
			.findOneAndUpdate({ _id: productId }, input, { new: true })
			.exec();

		if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

		console.log("(product.service.ts) result:", result);

		return result;
	}
}

export default ProductService;
