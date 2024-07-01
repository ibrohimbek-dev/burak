console.log("Products frontend javascript file");

$(function () {
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

	$("#process-btn").on("click", () => {
		$(".dish-container").slideToggle(500);
		$("#process-btn").css("display", "none");
	});

	$("#cancel-btn").on("click", () => {
		$(".dish-container").slideToggle(400);
		$("#process-btn").css("display", "flex");
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
