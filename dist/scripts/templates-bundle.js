angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("404.html","<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Page Not Found :(</title>\n        <style>\n            ::-moz-selection {\n                background: #b3d4fc;\n                text-shadow: none;\n            }\n\n            ::selection {\n                background: #b3d4fc;\n                text-shadow: none;\n            }\n\n            html {\n                padding: 30px 10px;\n                font-size: 20px;\n                line-height: 1.4;\n                color: #737373;\n                background: #f0f0f0;\n                -webkit-text-size-adjust: 100%;\n                -ms-text-size-adjust: 100%;\n            }\n\n            html,\n            input {\n                font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            }\n\n            body {\n                max-width: 500px;\n                _width: 500px;\n                padding: 30px 20px 50px;\n                border: 1px solid #b3b3b3;\n                border-radius: 4px;\n                margin: 0 auto;\n                box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n                background: #fcfcfc;\n            }\n\n            h1 {\n                margin: 0 10px;\n                font-size: 50px;\n                text-align: center;\n            }\n\n            h1 span {\n                color: #bbb;\n            }\n\n            h3 {\n                margin: 1.5em 0 0.5em;\n            }\n\n            p {\n                margin: 1em 0;\n            }\n\n            ul {\n                padding: 0 0 0 40px;\n                margin: 1em 0;\n            }\n\n            .container {\n                max-width: 380px;\n                _width: 380px;\n                margin: 0 auto;\n            }\n\n            /* google search */\n\n            #goog-fixurl ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n\n            #goog-fixurl form {\n                margin: 0;\n            }\n\n            #goog-wm-qt,\n            #goog-wm-sb {\n                border: 1px solid #bbb;\n                font-size: 16px;\n                line-height: normal;\n                vertical-align: top;\n                color: #444;\n                border-radius: 2px;\n            }\n\n            #goog-wm-qt {\n                width: 220px;\n                height: 20px;\n                padding: 5px;\n                margin: 5px 10px 0 0;\n                box-shadow: inset 0 1px 1px #ccc;\n            }\n\n            #goog-wm-sb {\n                display: inline-block;\n                height: 32px;\n                padding: 0 10px;\n                margin: 5px 0 0;\n                white-space: nowrap;\n                cursor: pointer;\n                background-color: #f5f5f5;\n                background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n                -webkit-appearance: none;\n                -moz-appearance: none;\n                appearance: none;\n                *overflow: visible;\n                *display: inline;\n                *zoom: 1;\n            }\n\n            #goog-wm-sb:hover,\n            #goog-wm-sb:focus {\n                border-color: #aaa;\n                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n                background-color: #f8f8f8;\n            }\n\n            #goog-wm-qt:hover,\n            #goog-wm-qt:focus {\n                border-color: #105cb6;\n                outline: 0;\n                color: #222;\n            }\n\n            input::-moz-focus-inner {\n                padding: 0;\n                border: 0;\n            }\n        </style>\n    </head>\n    <body>\n        <div class=\"container\">\n            <h1>Not found <span>:(</span></h1>\n            <p>Sorry, but the page you were trying to view does not exist.</p>\n            <p>It looks like this was the result of either:</p>\n            <ul>\n                <li>a mistyped address</li>\n                <li>an out-of-date link</li>\n            </ul>\n            <script>\n                var GOOG_FIXURL_LANG = (navigator.language || \'\').slice(0,2),GOOG_FIXURL_SITE = location.host;\n            </script>\n            <script src=\"//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js\"></script>\n        </div>\n    </body>\n</html>\n");
$templateCache.put("index.html","<!doctype html>\n<html class=\"no-js\" ng-app=\"MisspelledKee\">\n<head>\n    <meta charset=\"utf-8\">\n    <title>MisspelledKee</title>\n    <meta name=\"description\" content=\"\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n</head>\n<body>\n    <vpx-test-directive>vpx test directive\'s content</vpx-test-directive>\n\n    <!-- usemin task that copies every file to the ./dist directory -->\n    <!-- build:bower(vendor) scripts/vendors-bundle.js -->\n    <script src=\"bower_components/angular/angular.js\"></script>\n    <script src=\"bower_components/angular-ui-router/release/angular-ui-router.js\"></script>\n    <!-- endbuild -->\n\n    <!-- application js, from templates to states and common modules -->\n    <script src=\"scripts/templates-bundle.js\"></script>\n    <script src=\"scripts/modules-bundle.js\"></script>\n</body>\n</html>\n");
$templateCache.put("app/xmodule/xtemplate.html","<p>This is the content of the xtemplate</p>\n");
$templateCache.put("common/vpxGroups/templates/favorite-groups.html","<ul>\n  <li class=\"group-{{group.groupid}}\"\n      ng-repeat=\"group in groups\"\n      ng-class=\"{\'active-group\': activeGroup == group.groupid }\">\n\n    <button ng-click=\"selectGroup(group.groupid)\"\n            class=\"btn btn-primary btn-lg btn-block\"\n            type=\"button\">\n\n      <!-- <img ng-if=\"group.avatarUrl\"\n           src=\"{{group.avatarUrl}}\"\n           style=\"display:none; width:80px; height: 80px;\"> -->\n\n      {{group.name}}\n    </button>\n\n  </li>\n</ul>\n");
$templateCache.put("common/vpxGroups/templates/groups-list.html","<ul>\n  <li class=\"group-{{group.groupid}}\"\n      ng-repeat=\"group in groups.list\"\n      ng-class=\"{\'active-group\': group.active}\">\n    <button ng-click=\"ctrl.selectGroup(group.groupid)\"\n            type=\"button\"\n            class=\"btn btn-primary btn-lg btn-block\">\n\n      <!-- <img ng-if=\"group.avatarUrl\" src=\"{{group.avatarUrl}}\" style=\"width:80px; height: 80px;\"> -->\n      {{group.name}}\n    </button>\n  </li>\n</ul>\n");
$templateCache.put("assets/fonts/flat-icon/flaticon.html","<!DOCTYPE html>\n<html>\n\n<head>\n    <title>Flaticon WebFont</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"flaticon.css\">\n    <meta charset=\"UTF-8\">\n    <style>\n    body {\n        font-family: sans-serif;\n        line-height: 1.5;\n        font-size: 16px;\n        padding: 20px;\n        color:#333;\n    }\n    * {\n        -moz-box-sizing: border-box;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n    [class^=\"flaticon-\"]:before, [class*=\" flaticon-\"]:before, [class^=\"flaticon-\"]:after, [class*=\" flaticon-\"]:after {\n        font-family: Flaticon;\n        font-size: 30px;\n        font-style: normal;\n        margin-left: 20px;\n        color: #333;\n    }\n    .image p {\n		font-size: 12px;\n		margin: 0px;\n		clear: none;\n		width: 300px;\n		line-height: 40px;\n	}\n    .text {\n        float: left;\n        font-size:14px;\n        margin-top: 15px;\n    }\n    .text ul {\n        margin-left:0px;\n        color:#111;\n        margin-bottom:20px;\n    }\n    .text .ex {\n        font-size:12px;\n        color:#666;\n        margin-left:35px;\n        display:block;\n    }\n    .text ul li {\n        margin-top:10px;\n        list-style:none;\n    }\n    .num {\n        background:#66A523;\n        color:#fff;\n        border-radius:20px;\n        padding:1px;\n        display:inline-block;\n        width:22px;\n        height:22px;\n        text-align:center;\n        margin-right: 5px;\n    }\n    .text ul strong {\n        font-weight:normal;\n        color:#000;\n    }\n    .image {\n        width: 280px;\n        float: left;\n        margin-bottom: 15px;\n        margin-right: 30px;\n    }\n    #glyphs {\n        clear: both;\n    }\n    .image p:nth-child(even) i {\n        clear: none;\n    }\n    .glyph {\n        display: inline-block;\n        width: 120px;\n        margin: 10px;\n        text-align: center;\n        vertical-align: top;\n        background: #FFF;\n    }\n    .glyph .glyph-icon {\n        padding: 10px;\n        display: block;\n        font-family:\"Flaticon\";\n        font-size: 64px;\n        line-height: 1;\n    }\n    .glyph .glyph-icon:before {\n        font-size: 64px;\n        color: #666;\n        margin-left: 0;\n    }\n    .class-name {\n        font-size: 12px;\n    }\n    .author-name {\n		font-size: 10px;\n	}\n	a{\n		color: #66A523;\n	}\n    .instructions {\n        font-style:italic;\n        font-size:22px;\n        margin-bottom:10px;\n    }\n    .iconsuse {\n        font-size:22px;\n        font-style:italic;\n        padding-top:20px;\n        margin-top:20px;\n        border-top:1px solid #bbb;\n    }\n    .usetitle {\n        margin-bottom: 10px;\n        font-size: 20px;\n        font-style: italic;\n    }\n    .class-name:last-child {\n        font-size: 10px;\n        color:#888;\n    }\n    .class-name:last-child a {\n        font-size: 10px;\n        color:#555;\n    }\n    .class-name:last-child a:hover {\n        color:#66A523;\n    }\n    .glyph > input {\n        display: block;\n        width: 100px;\n        margin: 5px auto;\n        text-align: center;\n        font-size: 12px;\n        cursor: text;\n    }\n    .glyph > input.icon-input {\n        font-family:\"Flaticon\";\n        font-size: 16px;\n        margin-bottom: 10px;\n    }\n    h1.logo {\n        font-size: 40px;\n        letter-spacing: -1px;\n        margin-top: -16px;\n        text-transform: lowercase;\n        border-bottom:1px solid #bbb;\n    }\n    h1.logo strong {\n        font-size: 16px;\n        font-family:sans-serif;\n        font-weight:normal;\n        color:#333;\n    }\n    h1.logo a {\n        color:#34302d;\n        text-decoration: none;\n    }\n    h1.logo a span {\n        color:#66A523;\n    }\n    #footer {\n        padding-top:40px;\n        clear:both;\n        text-align:center;\n    }\n    #footer a {\n        color:#66A523;\n    }\n    textarea {\n		margin: 0px;\n		width: 800px;\n		height: 150px;\n		border: 1px solid #CCC;\n		resize: none;\n		background: #EEE;\n    }\n    .author-link, .attrDiv a{\n    	font-size: 12px;\n    	color: #333;\n    	text-decoration: none;\n    }\n    .external {\n    	display: block;\n    }\n    .attrDiv {\n		font-size: 12px;\n	}\n    .attribution {\n        border-top: 1px solid #AAA;\n        margin: 10px 0;\n        padding-top: 15px;\n    }\n    </style>\n</head>\n\n<body>\n    <header>\n        <h1 class=\"logo\">\n            <a href=\"http://www.flaticon.com\">\n                <span>FLAT</span>ICON</a>\n            <strong>Font Demo</strong>\n        </h1>\n    </header>\n\n    <section class=\"demo\">\n        <div class=\"text\">\n\n            <div class=\"instructions\">Instructions:</div>\n\n            <ul>\n                <li>\n                    <p>\n                        <span class=\"num\">1</span>Copy the \"Fonts\" files and CSS files to your website CSS folder.\n                </li>\n                <li>\n                    <p>\n                        <span class=\"num\">2</span>Add the CSS link to your website source code on header.\n                        <br />\n                        <span class=\"ex\">&lt;head&gt;\n                            <br/>...\n                            <br/>&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"your_website_domain/css_root/flaticon.css\"&gt;\n                            <br/>...\n                            <br/>&lt;/head&gt;</span>\n                </li>\n\n                <li>\n                    <p>\n                        <span class=\"num\">3</span>Use the icon class on \"display:inline\" elements:\n                        <br />\n                        <span class=\"ex\">Use example: &lt;i class=&quot;flaticon-airplane49&quot;&gt;&lt;/i&gt; or &lt;span class=&quot;flaticon-airplane49&quot;&gt;&lt;/span&gt;</span>\n                </li>\n            </ul>\n        </div>\n\n    </section>\n\n    <section id=\"glyphs\"><div class=\"glyph\">\n		<div class=\"glyph-icon flaticon-chevron13\"></div>\n		<div class=\"class-name\">.flaticon-chevron13</div><div class=\"author-name\">Author: <a href=\"http://www.flaticon.com/free-icon/chevron-arrow-to-right-ios-7-interface-symbol_16049\">Freepik</a></div></div><div class=\"glyph\">\n		<div class=\"glyph-icon flaticon-dark33\"></div>\n		<div class=\"class-name\">.flaticon-dark33</div><div class=\"author-name\">Author: <a href=\"http://www.flaticon.com/free-icon/dark-magnifying-glass-outline_14968\">Freepik</a></div></div><div class=\"glyph\">\n		<div class=\"glyph-icon flaticon-group25\"></div>\n		<div class=\"class-name\">.flaticon-group25</div><div class=\"author-name\">Author: <a href=\"http://www.flaticon.com/free-icon/group-persons-outline-ios-7-interface-symbol_16016\">Freepik</a></div></div><div class=\"glyph\">\n		<div class=\"glyph-icon flaticon-outline5\"></div>\n		<div class=\"class-name\">.flaticon-outline5</div><div class=\"author-name\">Author: <a href=\"http://www.flaticon.com/free-icon/outline-of-a-house_14944\">Freepik</a></div></div><div class=\"glyph\">\n		<div class=\"glyph-icon flaticon-plus16\"></div>\n		<div class=\"class-name\">.flaticon-plus16</div><div class=\"author-name\">Author: <a href=\"http://www.flaticon.com/free-icon/plus-sign-in-a-circular-outline_16909\">Freepik</a></div></div></section>\n\n<section class=\"attribution\">\n\n	<div class=\"usetitle\">License and attribution:</div><div class=\"attrDiv\">Font generated by <a href=\"http://www.flaticon.com\">flaticon.com</a>\n under <a href=\"http://creativecommons.org/licenses/by/3.0/\">CC BY</a>. The authors are: <a href=\"http://www.freepik.com\">Freepik</a>.</div><div class=\"usetitle\">Copy the Attribution License:</div>\n\n<textarea onclick=\"this.focus();this.select();\">Font generated by &lt;a href=&quot;http://www.flaticon.com&quot;&gt;flaticon.com&lt;/a&gt;\n under &lt;a href=&quot;http://creativecommons.org/licenses/by/3.0/&quot;&gt;CC BY&lt;/a&gt;. The authors are: &lt;a href=&quot;http://www.freepik.com&quot;&gt;Freepik&lt;/a&gt;.</textarea>\n\n</section>\n\n<section class=\"iconsuse\">\n    	<div class=\"usetitle\">Examples:</div>\n		<div class=\"image\"><p>&lt;i class=&quot;flaticon-chevron13&quot;&gt;&lt;/i&gt; <i class=\"flaticon-chevron13\"></i></p><p>&lt;i class=&quot;flaticon-dark33&quot;&gt;&lt;/i&gt; <i class=\"flaticon-dark33\"></i></p><p>&lt;i class=&quot;flaticon-group25&quot;&gt;&lt;/i&gt; <i class=\"flaticon-group25\"></i></p><p>&lt;i class=&quot;flaticon-outline5&quot;&gt;&lt;/i&gt; <i class=\"flaticon-outline5\"></i></p><p>&lt;i class=&quot;flaticon-plus16&quot;&gt;&lt;/i&gt; <i class=\"flaticon-plus16\"></i></p></div>\n</section>\n<div id=\"footer\">\n    <div>Generated by <a href=\"http://www.flaticon.com\">flaticon.com</a>\n    </div>\n</div>\n	</body>\n</html>");}]);