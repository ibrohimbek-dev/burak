console.log("Signup frontend javascript file");

$(function () {
	const fileTarget = $(".file-box .upload-hidden");
	let fileName;
	
	fileTarget.on("change", function() {
    if (window.FileReader) {
			const uploadFile = $(this)[0].files[0];
			const fileType = uploadFile["type"];

			const valiImageType = ["image/jpg", "image/jpeg", "image/png"];

			if (!valiImageType.includes(fileType)) {
				alert("Image type does not match!");
			} else {
				if (uploadFile) {
					$(".upload-img-frame")
						.attr("src", URL.createObjectURL(uploadFile))
						.addClass("success");
				}

				fileName = $(this)[0].files[0].name;
			}

			$(this).siblings(".upload-name").val(fileName);
		}
	});
});



function validateSignupForm() {
	const [memberNick, memberPhone, memberPassword, confirmPassword] = [
		$(".member-nick").val(),
		$(".member-phone").val(),
		$(".member-password").val(),
		$(".confirm-password").val(),
	];

	const [nickLeng, phoneLeng, passLeng, confirmLeng] = [
		memberNick.length > 0,
		memberPhone.length > 0,
		memberPassword.length > 0,
		confirmPassword.length > 0,
	];

	if (!nickLeng || !phoneLeng || !passLeng || !confirmLeng) {
		alert("Please fill the all the fields!");
		return false;
	}

	if (memberPassword !== confirmPassword) {
		alert("Passwords does not match!");
		return false;
	}

	const memberImgFileName = $(".member-image").get(0).files[0]
	console.log("memberImgFileName:", memberImgFileName);
	const memberImage = memberImgFileName?.name ? memberImgFileName?.name : null;

	if (!memberImage) {
		alert("Please, upload an image!");
		return false;
	}
}
