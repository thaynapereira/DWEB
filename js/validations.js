
/* limpa espaços á esquerda, direita e duplicados no meio */
function cleanWhitespaces( text )
{
	text = text.trim();
	text = text.replace(/\s+/g," ");
	return text;
}

/* limpa todos os espaços brancos */
function cleanAllWhitespaces( text )
{
	text = text.replace(/\s+/g,"");
	return text;
}

/* validar texto com um minimo de caracteres ou com valor certo  */
function validateCharacters( text, min, exact )
{
	if( exact == 1 && text.length != min )
		return false;
	else if( exact == 0 && text.length < min )
		return false;
	else return true;
}

/* validar texto com um minimo de caracteres ou 
com valor certo, SEM NÚMEROS */
function validateText( text, min, exact )
{
	/*  verificar se existem números no texto*/
	if ( text.match(/[+-]?\d+(?:\.\d+)?/g) != null )
		return false;
	else 
		return validateCharacters( text, min, exact );
}

/* */
function validateNumbers( text )
{
 	var numbers = /^[0-9]+$/;
	 
	if(text.match(numbers))
		return true;
	return false;
} 

/* */
function validateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true
  }
    return false
}

$('.carousel').carousel({
  interval: 2000
});