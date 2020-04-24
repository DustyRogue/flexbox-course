function(n) {
    var i = t(this),
      r = i.attr("href"),
      o = i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""),
      s = t(document).find(o),
      a = s.data("bs.modal") ? "toggle" : t.extend({
        remote: !/#/.test(r) && r
      }, s.data(), i.data());
    i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
      t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
        i.is(":visible") && i.trigger("focus")
      })
    }), e.call(s, a, this)
  }