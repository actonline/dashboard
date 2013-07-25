function lorem() {
	document.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
}

function page(options) {
	classname = 'icon-' + options.icon + (options.yes ? '-yes' : '-no')
	document.write("<div data-role='page' id='" + options.id + "'  class='linen'>");
	document.write("<div data-role='header'  class='homeheader' data-position='fixed' data-theme='b'><a data-rel='back' class='back'></a>");
	document.write("<h1>Details</h1></div><div data-role='content' style='background-color:#fff;padding: 0'>");
	if (options.icon) {
		document.write('<div class="'+ classname + '" style="margin: 0 20px 10px 0"></div>');
	}
	document.write("<div class='detailheading'>" + options.title + "</div>");
	document.write("<div class='detailsummary'>" + options.summary + "</div><br clear='all'>");
	if (options.text && options.text != '') {
		document.write("<h2>WHY?</h2><div class='detaildescription'>")
		document.write(options.text);
	}
	document.write("</div></div>");
	document.write('<div data-role="footer" data-position="fixed" data-theme="b" style="padding-bottom: 2px">');
	document.write('<div class="linkbar"><a href="#fullpolicy" data-transition="slide">FULL PRIVACY POLICY</a></div>');
	document.write('</div></div>');
	
}

function launch_icon(options) {
	classname = 'icon-' + options.icon + (options.yes ? '-yes' : '-no')
	document.write("<a href='#" + options.id + "' data-transition='slide'><div class='"+ classname + "'></div></a>");
}

function section(title, icons) {
	document.write("<h2>" + title + "</h2><div class='panel'>");
	for (i in icons) {
		launch_icon(icons[i]);
	}
	document.write("<br clear='all'></div>");
}

var behavior_icons = [{
	id: 'history',
	icon: 'history',
	title: 'Browser History',
	yes: true,
	summary: "A list of websites you visited.",
	text: "<p>We access your phone's internet browser history so that you are able to access it from within the app itself.   This allows us to predict new sites, new articles, and new services you might be interested in learning more about. </p><p>This information is never shared with any third parties and we delete or aggregate and anonymize it all after 6 months.   The aggregated and anonymized data may be shared with Consumer Data Resellers and AD NETWORKS, but we will never share you specific history with anyone.</p>"
}, {
	id: 'phone',
	icon: 'phone',
	title: 'Phone &amp; Text Logs',
	yes: true,
	summary: "A list of the calls or texts made or received.",
	text: "In order to be an efficient personal assistant, AWESOME APP accesses your phone and text logs to confirm whether you have made called Grandma on her birthday or responded to your wife's request about grocery shopping. This information is only used for this purpose and is never shared with any third parties."
}, {
	id: 'bio',
	icon: 'bio',
	title: 'Biometrics',	
	yes: true, 
	summary: "Information about your body, including fingerprints, facial recognition, signatures and/or voice print.",
	text: "<p>We only store your clothing sizes in the app to make your online shopping more efficient.  It allows us to filter searches on popular shopping sites for only items that are available in your size.</p><p>This information may be shared with the internet site on which you shop and we also may share it with Ad Networks so they can provide personalized advertising to you. No more ads for shoes that are no longer available in your size!</p>"
}, {
	id: 'financial',
	icon: 'financial', 
	title: "Financial Info",
	yes: false,
	summary: "Credit, bank and consumer-specific financial information such as transaction data.",
	text: ""
}, {
	id: 'contacts',
	icon: 'contacts', 
	title: "Contacts",
	yes: false,
	summary: "Contacts, social networking connections or their phone numbers, postal, email and text addresses.",
	text: ""
}, {
	id: 'files',
	icon: 'files', 
	title: "User Files",
	yes: false,
	summary: "Files stored on the device that contain your content, such as calendar, photos, text, or video.",
	text: ""
}, {
	id: 'location',
	icon: 'location', 
	title: "Location",
	summary: "Precise past or current location of where a user has gone.",
	yes: false,
	text: "<p class='first'>This app uses data from the GPS and other location technologies on the device.</p>"
}, {
	id: 'health',
	icon: 'health', 
	title: "Health Info",
	summary: "Health claims and other information used to measure health or wellness.",
	yes: false,
	text: ""
}];

var partner_icons = [{
	id: 'ads',
	icon: 'ads',
	title: 'Ad Networks',
	yes: true,
	summary: "Companies that display ads to you through apps",
	text: "Instead of charging you directly for this app we use advertising as a way to pay for all the hard work that goes into developing and marketing our app.  We provide anonymized information to ad network to ensure that you get the most relevant ads possible."
}, {
	id: 'carriers',
	icon: 'carriers',
	title: 'Carriers',
	yes: true,
	summary: "Companies that provide mobile connections.",
	text: "We share general usage patterns with carriers to help them improve their services.  We only share aggregated, anonymized data with them."
}, {
	id: 'resellers',
	icon: 'resellers',
	title: 'Consumer Data Resellers',
	yes: true,
	summary: "Companies that sell consumer information to other companies for multiple purposes including offering products and services that may interest you.",
	text: "We want to keep this app free, therefore we provide information about your purchasing history to a respected consumer data reseller."
}];

