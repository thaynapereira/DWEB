


/**/
$('#txt-email').blur(function(){
	email = $(this).val();

	valido = validateEmail(email);

	if( valido === true )
	{
		$(this).removeClass('is-invalid').addClass('is-valid')
	}
	else
	{
		$(this).removeClass('is-valid').addClass('is-invalid')
	}

	console.log(valido);
});

/**/
$('#txt-nome').blur(function(){
	nome = $(this).val();

	nome = cleanWhitespaces( nome );

	$(this).val(nome);

	valido = validateText( nome, 12, 0 );

	if( valido === true )
	{
		$(this).removeClass('is-invalid').addClass('is-valid')
	}
	else
	{
		$(this).removeClass('is-valid').addClass('is-invalid')
	}

	console.log(valido);
});

/**/
$('form.newsletter').submit(function(event) {

	
	alert('submeter os dados');
});
/* 
/*	
$('#btn-subscrever').click(function(){
	$('#newsletter').addClass('d-none');
	$('#newsletter-formulario').removeClass('d-none');
	/*$('#newsletter').fadeOut(2000);
	$('#newsletter-formulario').removeClass('d-none').slideUp();
}) */
