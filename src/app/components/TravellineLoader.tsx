
'use client';
import { useEffect } from "react";

export default function Travelline() {
  useEffect(() => {
    if ((window as any).travelline) return; // уже загружено

    (function(w) {
      var q = [
        ["setContext", "TL-INT-zvezd-three_2025-09-04", "ru"],
        ["embed", "booking-form", {container: "tl-booking-form"}],
        ["embed", "search-form", {container: "tl-search-form"}],
      ];
      var h = ["ru-ibe.tlintegration.ru", "ibe.tlintegration.ru", "ibe.tlintegration.com"];
      var t = w.travelline = (w.travelline || {}),
          ti = t.integration = (t.integration || {});
      ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
      if (!ti.__loader) {
        ti.__loader = true;
        var d = w.document,
            c = d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0];
        function e(s: HTMLScriptElement, f: () => void) {
          return function() {
            if (!(w as any).TL) {
              c.removeChild(s);
              f();
            }
          };
        }
        (function l(h: string[]) {
          if(h.length === 0) return;
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://" + h[0] + "/integration/loader.js";
          s.onerror = s.onload = e(s, () => l(h.slice(1)));
          c.appendChild(s);
        })(h);
      }
    })(window);
  }, []);

  return null;
}
