		function lorem() {
			document.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
		}

		function page(options) {
			filename = options.icon + (options.yes ? '-yes.png' : '-no.png')
			document.write("<div data-role='page' id='" + options.id + "'>");
			document.write("<div data-role='header' data-position='fixed' data-theme='b'><a data-rel='back'>Back</a>");
			document.write("<h1>" + options.title + "</h1></div><div data-role='content'>");
			if (options.icon) {
				document.write("<img src='" + filename + "' align='left' style='padding: 0 20px 10px 0;width: 85px;height: 105px'>");
			}
			if (options.text) document.write(options.text);
			else lorem();
			document.write("</div></div>");
		}

		function launch_icon(options) {
			filename = options.icon + (options.yes ? '-yes.png' : '-no.png')
			document.write("<div class='launch_icon'><a href='#" + options.id + "' data-transition='slide'>");
			document.write("<img src='" + filename + "' style='width: 85px;height: 105px'></a></div>");
		}

		function section(title, icons) {
			document.write("<h2>" + title + "</h2><div class='panel'>");
			for (i in icons)
			launch_icon(icons[i]);
			document.write("</div><br clear='all'>");
		}

		var behavior_icons = [{
			id: 'user',
			icon: 'user',
			title: 'User Info',
			yes: true,
			text: "<p class='first heading'>This app accesses information about the user. This data includes:</p><p>AGE - This app asks users for their age.</p><p>BIOMETRICS - Biometrics are specific measurements or biological traits that can identify a user. This app collects biometrics information.</p><p>PERSISTENT IDENTIFIERS - Persistent identifiers are ID's that relate to your device or account that can be tied to data collected by this app.</p><p class='heading'>WHY</p><p>This app collects the age of users in order to suggest content relevant to the user. This information is not transmitted or shared outside the app.</p>"
		}, {
			id: 'sensitive',
			icon: 'sensitive',
			title: 'Sensitive Data',
			yes: true,
			text: "<p class='first heading'>This app accesses information about the user that is sensitive in nature. Sensitive information includes health or financial records and accounts. This data includes:</p><p>HEALTH, MEDICAL, THERAPY -- This app collects data about the health of the user, and may connect to Patient Health Records (PHR) or other medically relevant information [as defined by HIPPA]</p><p>FINANCIAL - This app collects data about the financial records of the user</p><p class='heading'>WHY</p><p>We at ACT want to show you the potential of this Privacy Dashboard.</p>"
		}, {
			id: 'usage',
			icon: 'usage',
			title: 'Usage',
			yes: true,
			text: "<p class='first heading'>This app accesses data about the use of the app and use of the device itself. This data includes:</p><p>APP USE PATTERNS - This app monitors how often the app is used, how it performs, how users interact with it, and what features are used most often. </p><p>BROWSER HISTORY - This app accesses the user's history of internet sites visited on the device.</p>"
		}, {
			id: 'location',
			icon: 'location',
			title: 'Location',
			yes: true,
			text: "<p class='first'>This app uses data from the GPS and other location technologies on the device.</p>"
		}, {
			id: 'contacts',
			icon: 'contacts',
			title: 'Contacts',
			yes: false,
			text: "<p class='first'>This app accesses the user's contacts that are stored on the device and the user's friends on Twitter.</p>"
		}, {
			id: 'photos',
			icon: 'camera',
			title: 'Photos and Files',
			yes: true,
			text: "<p class='first heading'>This app can access the photos and files stored on the device. This data includes:</p><p>PHOTOS - This app accesses the photos you have stored on your device.</p><p>FILES - This app accesses the documents and other files that are stored on your device.</p>"
		}];

		var partner_icons = [{
			id: 'analytics',
			icon: 'analytics',
			title: 'Analytics',
			yes: true,
			text: "<p class='first'>This app shares information with [Google Analytics]. Analytics tracks the use of an app and its features and provides app developers with detailed reports about the performance and use of the app. This information includes:</p><p>APP USE PATTERNS</p><p class='heading'>WHY</p><p>This app uses analytics to identify ways to improve the app. Using analytics, we are able to find and fix bugs, identify features that are confusing and adjust them, and identify new feature that should be added.</p>"
		}, {
			id: 'ads',
			icon: 'ads',
			title: 'Ads',
			yes: true,
			text: "<p class='first heading'>This app shares information with the [Google AdMob] advertising network including:</p><p>AGE</p><p>LOCATION</p><p>BROWSER HISTORY</p><p>Click HERE more info about [Google AdMob]</p><p class='heading'>WHY</p><p>We share this information with Google AdMob in order to provide relevant advertising and keep this app free to the user.</p>"
		}, {
			id: 'social2',
			icon: 'social',
			title: 'Social&nbsp;Media',
			yes: true,
			text: "<p class='first'>This app shares information with [Twitter] and [Facebook] social networks if you turn on that sharing. This information includes:</p><p>LOCATION</p><p class='heading'>WHY</p><p>This app gives you the ability to share your activity via your social networks. We provide location info to your social networks to allow you to check-in to a location more quickly.</p>"
		}];
