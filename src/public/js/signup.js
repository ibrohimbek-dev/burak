console.log("Signup frontend javascript file");

$(function () {});

function validateSignupForm() {
	const [memberNick, memberPhone, memberPassword, confirmPassword] = [
		$(".member-nick").val(),
		$(".member-phone").val(),
		$(".member-password").val(),
		$(".confirm-password").val(),
	];

	const [nickLeng, phoneLeng, passLeng, confirmLeng] = [
		memberNick.length,
		memberPhone.length,
		memberPassword.length,
		confirmPassword.length,
	];

	if (nickLeng && phoneLeng && passLeng && confirmLeng) {
		if (memberPassword === confirmPassword) {
			return true;
		} else {
			alert("Passwords does not match!");
			return false;
		}
	} else {
		alert("Please fill the all the fields!");
		return false;
	}
}
