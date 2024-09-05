/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nus/edu/sg/cw_detailedreport/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});