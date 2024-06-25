import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import {
	Product,
	ProductInput,
	ProductInputUpdateInput,
} from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
	private readonly productModel;

	constructor() {
		this.productModel = ProductModel;
	}

	// SPA ---------------------------------------------

	// SSR ---------------------------------------------

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
		input: ProductInputUpdateInput
	): Promise<Product> {
		// string => ObjectId
		productId = shapeIntoMongooseObjectId(productId);

		const result = await this.productModel
			.findOneAndUpdate({ _id: productId }, input, { new: true })
			.exec();

    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    
    console.log("(product.service.ts) result:", result)

    return result
	}
}

export default ProductService;

// Keyingi mantiqlarimizni shu yerdan davom ettiramiz
