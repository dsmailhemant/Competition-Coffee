var sendgrid_username   = "dsmail.hamwent";
var sendgrid_password   = "hemant99pnm";
var to                  = "dsmail.hamwent@gmail.com";

var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);
var email      = new sendgrid.Email();

email.addTo(to);
email.setFrom(to);
email.setSubject('sadfsafs');
email.setText('dsafsdfsd');
email.setHtml('sddfs');
email.addSubstitution("%how%", "Owl");
email.addHeader('X-Sent-Using', 'SendGrid-API');
email.addHeader('X-Transport', 'web');
//email.addFile({path: './gif.gif', filename: 'owl.gif'});

sendgrid.send(email, function(err, json) {
  if (err) { return console.error(err); }
	console.log(json);
});
