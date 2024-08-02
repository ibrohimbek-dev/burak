
$(function () {
	$(".member-status").on("change", (event) => {
		const memberId = event.target.id;


		const memberStatus = $(`#${memberId}.member-status`).val();


		axios
			.post("/admin/user/edit", {
				_id: memberId,
				memberStatus: memberStatus,
			})
			.then((res) => {

				const result = res.data;

				if (result.usersData) {
					$(".member-status").blur();
				} else {
					alert("User updated successfully!");
				}
			})
			.catch((err) => {
				alert("User update is failed!");
			});
	});
});
