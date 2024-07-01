console.log("Users frontend javascript file");

$(function () {
	$(".member-status").on("change", (event) => {
		const memberId = event.target.id;

		console.log("memberId:", memberId);

		const memberStatus = $(`#${memberId}.member-status`).val();
		console.log("memberStatus:", memberStatus);

		// TODO: axios updateChosenUser
		axios
			.post("/admin/user/edit", {
				_id: memberId,
				memberStatus: memberStatus,
			})
			.then((res) => {
				console.log("response:", res);

				const result = res.data;
				console.log("result:", result);

				if (result.usersData) {
					console.log("User updated successfully!");
					$(".member-status").blur();
				} else {
					alert("User updated successfully!");
				}
			})
			.catch((err) => {
				console.log("Error on user.js:", err);
				alert("User update is failed!");
			});
	});
});
