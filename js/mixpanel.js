<!-- Paste this right before your closing </head> tag -->
  (function (f, b) { if (!b.__SV) { var e, g, i, h; window.mixpanel = b; b._i = []; b.init = function (e, f, c) { function g(a, d) { var b = d.split("."); 2 == b.length && ((a = a[b[0]]), (d = b[1])); a[d] = function () { a.push([d].concat(Array.prototype.slice.call(arguments, 0))); }; } var a = b; "undefined" !== typeof c ? (a = b[c] = []) : (c = "mixpanel"); a.people = a.people || []; a.toString = function (a) { var d = "mixpanel"; "mixpanel" !== c && (d += "." + c); a || (d += " (stub)"); return d; }; a.people.toString = function () { return a.toString(1) + ".people (stub)"; }; i = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split( " "); for (h = 0; h < i.length; h++) g(a, i[h]); var j = "set set_once union unset remove delete".split(" "); a.get_group = function () { function b(c) { d[c] = function () { call2_args = arguments; call2 = [c].concat(Array.prototype.slice.call(call2_args, 0)); a.push([e, call2]); }; } for ( var d = {}, e = ["get_group"].concat( Array.prototype.slice.call(arguments, 0)), c = 0; c < j.length; c++) b(j[c]); return d; }; b._i.push([e, f, c]); }; b.__SV = 1.2; e = f.createElement("script"); e.type = "text/javascript"; e.async = !0; e.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === f.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"; g = f.getElementsByTagName("script")[0]; g.parentNode.insertBefore(e, g); } })(document, window.mixpanel || []);
 
// Near entry of your product, init Mixpanel
mixpanel.init("10196840d5c50512499c7cee1e26e442", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

//index.html shop it now button tracking
jQuery(".shopitnow").click(function(){
  mixpanel.track("Button",{"buttonname": "SHOP IT NOW"});
})
  
//index.html view all products button tracking
jQuery(".viewallproducts").click(function(){
  mixpanel.track("Button",{"buttonname": "View all products"});
})

//login button tracking
jQuery(".icon-user").click(function(){
  mixpanel.track("Button",{"buttonname": "Login"});
})

//contact-us button tracking
jQuery(".contact-us").click(function(){
  mixpanel.track("Button",{"buttonname": "Contact Us"});
})

//add to cart button tracking
jQuery(".cart-link").click(function(){
  var productname = jQuery(this).closest('.product-item').find('.product-detail a').text();
  var productprice = jQuery(this).closest('.product-item').find('.item-price').text();
  mixpanel.track(
    "Add to cart",
    {"product name": productname,
    "product price" : productprice}
);
})

//wishlist button tracking
jQuery(".wishlist-btn").click(function(){
  var productname = jQuery(this).closest('.product-item').find('.product-detail a').text();
  var productprice = jQuery(this).closest('.product-item').find('.item-price').text();
  mixpanel.track(
    "Add to wishlist",
    {"product name": productname,
    "product price" : productprice}
);
})

//blog page clicked article
jQuery(".post-item").click(function(){
  var articlename = jQuery(this).find('.post-title').text().trim();
  mixpanel.track(
    "Article viewed",
    {"Article name": articlename}
);
})

//nav click
jQuery(".item-anchor").click(function(){
  var navName = jQuery(this).text();
  mixpanel.track(
    "Navigation link",
    {"Nav name": navName}
);
})

//search click
jQuery(".icon-search").click(function(){
  var keyword = document.querySelector("s");
  mixpanel.track(
    "Search",
    {"Search Keyword": keyword}
);
})

//banner click
jQuery(".banner").click(function(){
  var bannertitle = jQuery(this).closest('.product-entry').find('.item-title').text();
  mixpanel.track(
    "Banner Click",
    {"Banner Title": bannertitle}
);
})

