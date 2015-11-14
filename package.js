Package.describe({
	name:"lepozepo:cloudinary",
	summary: "Upload files to Cloudinary",
	version:"4.1.0",
	git:"https://github.com/Lepozepo/cloudinary"
});

Npm.depends({
	cloudinary: "1.2.5"
});

Package.on_use(function (api){
	api.versionsFrom('METEOR@1.0');

	// Core Packages
	api.use(["meteor-base","coffeescript","mongo"], ["client", "server"]);
	api.use(["templating"], "client");
	api.use(["check","random","reactive-var"], ["client","server"]);

	// External Packages
	api.use(["matb33:collection-hooks@0.7.3"], ["client", "server"],{weak:true});

	// Cloudinary Client Side
	api.add_files("lib/jquery.cloudinary.js","client");

	// Core Files
	api.add_files("server/configuration.coffee", "server");
	api.add_files("server/signature.coffee", "server");

	api.add_files("client/functions.coffee", "client");

	api.export && api.export("Cloudinary",["server","client"]);

});

