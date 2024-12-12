let form = document.createElement('form');
form.action = 'https://formspree.io/f/xvolelqy';
form.method = 'GET';

form.innerHTML = '<input name="q" value="test">';

// the form must be in the document to submit it
document.body.append(form);

form.login();