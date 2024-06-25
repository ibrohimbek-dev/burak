import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput } from "../libs/types/product";
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
      return await this.productModel.create(input)
		} catch (err) {
			console.error("Error on model:createNewProduct:", err);
			throw new Errors(HttpCode.BAD_REQUEST, Message.PRODUCT_CREATION_FAILED);
		}
	}
}

export default ProductService;

// Keyingi mantiqlarimizni shu yerdan davom ettiramiz
