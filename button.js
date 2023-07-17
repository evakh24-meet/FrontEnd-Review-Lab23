var count = 0

function changebg() {
	count++
	if (count % 2 == 0){document.getElementById('html').style.backgroundColor = 'skyblue';}

	else {document.getElementById('html').style.backgroundColor = 'palegreen';}
}
