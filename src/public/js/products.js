console.log("Products frontend javascript file");

$(function () {
	// working on product volume:
	$(".product-collection").on("change", () => {
		const selectedValue = $(".product-collection").val();

		if (selectedValue === "DRINK") {
			$("#product-collection").hide();
			$("#product-volume").show();
		} else {
			$("#product-collection").show();
			$("#product-volume").hide();
		}
	});

	// Toggle form by clicking button:
	$("#process-btn").on("click", () => {
		$(".dish-container").slideToggle(500);
		$("#process-btn").css("display", "none");
	});

	$("#cancel-btn").on("click", () => {
		$(".dish-container").slideToggle(400);
		$("#process-btn").css("display", "flex");
	});

	// Update product status:
	$(".new-product-status").on("change", async (event) => {
		const productId = event.target.id;
		const productStatus = $(`#${productId}.new-product-status`).val();

		console.log("productId:", productId);
		console.log("productStatus:", productStatus);

		try {
			const response = await axios.post(`/admin/product/${productId}`, {
				productStatus: productStatus,
			});

			const result = response.data;

			if (result.productsData) {
				console.log("product updated successfully");
				$(".new-product-status").blur();
			} else {
				alert("Product Upadation is Failed!");
			}
		} catch (err) {
			console.log("Error on updating product status:", err);
			alert("Product updation is failed!");
		}
	});
});

// -----------------------------------------------
// Validate product form
function validateProductForm() {
	const [
		productName,
		productPrice,
		productLeftCount,
		productCollection,
		productDesc,
		productStatus,
	] = [
		$(".product-name").val(),
		$(".product-price").val(),
		$(".product-left-count").val(),
		$(".product-collection").val(),
		$(".product-desc").val(),
		$(".product-status").val(),
	];

	const [prName, prPr, prLtCn, prCol, prDesc, prSt] = [
		productName.length > 0,
		productPrice.length > 0,
		productLeftCount.length > 0,
		productCollection.length > 0,
		productDesc.length > 0,
		productStatus.length > 0,
	];

	if ((!prName || !prPr || !prLtCn || !prCol, !prDesc || !prSt)) {
		alert("Please fill the all the fields!");
		return false;
	} else return true;
}

// -----------------------------------------------
// preview image before uploading to the serve
function previewFileHandler(input, order) {
	const imgClassName = input.className;

	const file = $(`.${imgClassName}`).get(0).files[0];
	const fileType = file["type"];

	// Shu yerda manqitiqiy xatolik bor
	// product.ejs tarkibiga har bir surat uchun 'required'ni qo'shib chiqdim

	const validImageType = ["image/jpg", "image/jpeg", "image/png"];

	if (!validImageType.includes(fileType)) {
		alert("Please insert only jpeg, jpg and png!");

		// return false; matiqini kiritdim
		return false;
	} else {
		if (file) {
			console.log("file:", file);
			const reader = new FileReader();
			reader.onload = function () {
				$(`#image-section-${order}`).attr("src", reader.result);
			};

			reader.readAsDataURL(file);
		}
	}
}
