(function() {
  if ('Discourse' in window && Discourse.__container__) {
    Discourse.__container__
      .lookup("service:theme-settings")
      .registerSettings(8, {"Header_links":"Documentation,book,https://doc.babylonjs.com,vdm,blank","Svg_icons":""});
  }
})();
(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(8);
    var themePrefix = function themePrefix(key) {
      return 'theme_translations.8.' + key;
    };
    Discourse._registerPluginCode('0.4', function (api) {
      var _require = require("discourse-common/lib/icon-library"),
          iconNode = _require.iconNode;

      api.decorateWidget("header-icons:before", function (helper) {
        var hlt = settings.Header_links;
        return hlt.split("|").map(function (i) {
          var seg = $.map(i.split(","), $.trim);

          return helper.h("li." + seg[3], [helper.h("a.icon.btn-flat", {
            href: seg[2],
            title: seg[0],
            target: "_" + seg[4]
          }, iconNode(seg[1]))]);
        });
      });
    });
  }
})();