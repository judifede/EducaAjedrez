// eslint-disable-next-line no-undef
jQuery(document).ready(function ($) {
	$('#my-button').on('click', function () {
		$('#spinner').css({ display: 'block' });

		let selected_elo = $('#search_elo').val();
		let selected_country = $('#search_country').val();
		let selected_continent = $('#search_continent').val();
		let selected_name = $('#search_name').val();

		// eslint-disable-next-line no-undef
		jQuery.ajax({
			type: 'post',
			url: '/ajedrezschool/wordpress/wp-content/themes/temachess/theme/filter-players.php',
			// data: "action=" + ajax_var.action + "&nonce=" + ajax_var.nonce,
			// data: ‘marketName=’ + name,
			/*  dataType: "json",
            data: { 
                "pais": "rusia",
                "elo": "2000", 
            }, */
			dataType: 'text',
			data: `s_elo=${selected_elo} ${selected_country && '& s_country=' + selected_country} ${selected_continent && '& s_continent=' + selected_continent} ${selected_name && '& s_name=' + selected_name}`,
			success: function (result) {
				$('#section_players').html(result);
			},
			error: function (result) {
				$('#section_players').html(result + ' ERROR');
			},
			complete: function () {
				$('#spinner').css({ display: 'none' });
			},
		});
	});
});
