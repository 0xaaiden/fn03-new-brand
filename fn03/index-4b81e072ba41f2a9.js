(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(91409);
        },
      ]);
    },
    10827: function (e, t, i) {
      "use strict";
      i.d(t, {
        S: function () {
          return u;
        },
      });
      var a = i(85893),
        n = i(86010),
        r = i(25675),
        o = i(89439),
        s = i(41664),
        l = i.n(s),
        c = i(67294),
        d = i(88685),
        p = i(21942);
      function u(e) {
        let { className: t, timer: i = 4500 } = e,
          s = (0, r.E)(),
          u = (0, r.E)(),
          m = (0, d.R)((e) => e.initialRender),
          h = (0, d.R)((e) => e.setInitialRender),
          x = (0, c.useCallback)(async () => {
            await (0, p._)(i),
              s.start({ y: 0 }),
              s.start({
                rotate: "0deg",
                transition: { type: "tween", duration: 0.5 },
              }),
              u.start({
                opacity: 1,
                x: 0,
                transition: { type: "tween", delay: 0.3, duration: 0.5 },
              }),
              h();
          }, [s, u]);
        return (
          (0, c.useEffect)(() => {
            m && x();
          }, []),
          (0, a.jsx)(l(), {
            href: "/",
            className: "flex items-center",
            children: (0, a.jsxs)(o.E.svg, {
              initial: m && { opacity: 0 },
              animate: { opacity: 1 },
              width: "101",
              height: "25",
              viewBox: "0 0 101 25",
              fill: "black",
              xmlns: "http://www.w3.org/2000/svg",
              className: (0, n.Z)("overflow-visible", t),
              children: [
                (0, a.jsx)(o.E.path, {
                  initial: m && { y: -100, rotate: "-15deg" },
                  animate: m && s,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  //   fill: "#111",
                  d: "M13.586 30.444c-2.209 0-4.757-.069-4.757 3.967v3.32h4.745v3.82H8.829v17.542H3.941V41.554H-.196v-3.82H3.95v-3.349c-.009-6.903 4.024-7.905 9.624-7.905v3.967zm13.493 7.287h4.886v21.367h-4.653l-.126-2.671c-1.423 1.952-3.74 3.077-6.582 3.077-4.756 0-7.686-2.614-7.686-7.393V37.728h4.934v13.315c0 3.224 1.952 4.46 4.224 4.46 2.694 0 4.992-1.532 5.009-5.5V37.729zm19.088-.406c4.779 0 7.686 2.634 7.686 7.387v14.383H48.93V45.777c0-3.23-1.952-4.46-4.203-4.46-2.695 0-5.01 1.533-5.035 5.5v12.278h-4.883V37.731h4.886v2.53c1.422-1.845 3.702-2.928 6.48-2.928zm19.355 22.148c-6.417 0-11.064-4.414-11.064-11.084 0-6.65 4.652-11.064 11.064-11.064 5.072 0 8.96 2.694 10.128 7.453l-4.54.593c-.826-2.714-2.928-4.12-5.626-4.12-3.572 0-6.132 2.825-6.132 7.135s2.577 7.134 6.132 7.134c2.695 0 4.797-1.382 5.626-4.097l4.54.573c-1.169 4.756-5.136 7.48-10.128 7.48zm18.33-.383c-3.82 0-6.118-2.252-6.118-6.245V41.554h-4.27v-3.82h1.463c2.252 0 3.29-.89 3.29-3.671v-3.31h4.46v6.986h4.653v3.82h-4.653v10.785c0 1.995 1.083 2.977 2.715 2.977h1.926v3.763h-3.483zM90.79 33.65a3.02 3.02 0 0 1-3.011-2.994 3.011 3.011 0 0 1 6.008 0 3.04 3.04 0 0 1-2.994 2.994zM88.286 59.09V37.728h4.908v21.367h-4.908zm17.216.406c-6.455 0-11.234-4.19-11.234-11.107 0-6.86 4.739-11.064 11.234-11.064 6.523 0 11.254 4.203 11.254 11.064 0 6.918-4.756 11.107-11.254 11.107zm-.043-3.947c3.713 0 6.434-2.825 6.434-7.158 0-4.315-2.715-7.14-6.434-7.14-3.654 0-6.328 2.825-6.328 7.135 0 4.33 2.671 7.157 6.328 7.157zm23.728-18.216c4.779 0 7.687 2.635 7.687 7.388v14.377h-4.923v-13.32c0-3.23-1.952-4.46-4.204-4.46-2.694 0-5.009 1.532-5.035 5.499v12.278h-4.88V37.731h4.886v2.53c1.422-1.845 3.702-2.928 6.475-2.928zm19.274 22.174c-6.661 0-10.548-5.162-10.548-15.566 0-10.385 3.82-15.544 10.548-15.544 6.691 0 10.532 5.162 10.532 15.544 0 10.407-3.91 15.566-10.532 15.566zm0-4.442c3.527 0 5.626-3.484 5.626-11.127 0-7.75-2.194-11.084-5.626-11.084-3.477 0-5.625 3.334-5.625 11.084 0 7.65 2.064 11.127 5.625 11.127zm20.997 4.43c-7.258 0-10.491-3.782-10.491-10.997l5.01-.236c0 4.43 1.038 6.918 5.478 6.918 3.54 0 5.645-2.142 5.645-5.162 0-3.334-2.251-5.122-5.22-5.122h-1.332v-3.924h1.275c2.295 0 4.097-1.825 4.097-4.304 0-2.458-1.938-3.996-4.54-3.996-3.584 0-4.373 2.545-4.373 5.528l-4.966-.21c0-6.245 3.46-9.596 9.296-9.596 5.291 0 9.17 3.446 9.17 7.906a6.829 6.829 0 0 1-4.037 6.305c2.91.826 5.625 3.23 5.625 7.65 0 5.607-4.356 9.258-10.632 9.258zm19.323-.405V26.474h4.926V59.09h-4.92zm12.8.406c-3.46 0-6.581-1.659-6.581-5.822 0-4.571 3.714-5.99 8.17-6.791l3.225-.593c1.404-.28 1.972-.916 1.972-1.926 0-2.634-2.053-3.504-4.19-3.504-2.308 0-4.203 1.025-4.528 3.76l-4.393-.8c.751-4.425 3.935-6.466 9.218-6.466 4.273 0 8.577 1.531 8.577 7.54v8.282c0 2.024.532 2.588 2.024 2.588h.336v3.334h-2.308c-2.402 0-3.841-.846-4.33-2.824h-.237c-1.658 2.335-4.393 3.23-6.96 3.23zm1.146-3.84c3.357 0 5.97-2.488 5.97-6.398l-5.455 1.21c-2.251.425-3.504 1.194-3.504 2.812 0 1.675 1.322 2.378 2.995 2.378zm25.28-18.328c5.527 0 10.108 4.272 10.108 11.107 0 6.88-4.572 11.153-10.108 11.153-3.167 0-5.882-1.489-7.134-3.91l-.127 3.415h-4.667V26.477h4.866l.026 14.588c1.295-2.358 3.947-3.74 7.044-3.74zm-1.097 18.114c3.524 0 6.328-2.715 6.328-7.007 0-4.273-2.813-6.988-6.328-6.988s-6.305 2.885-6.305 6.988c0 4.12 2.758 7.007 6.305 7.007zm19.456 4.06c-4.652 0-8.2-1.981-8.913-5.923l4.137-1.169c.573 2.422 2.378 3.585 4.779 3.585 1.759 0 3.67-.634 3.63-2.695-.043-2.421-3.147-2.715-6.564-3.866-2.758-.89-5.441-2.15-5.441-5.862 0-4.292 3.541-6.218 7.963-6.218 4.036 0 7.393 1.632 8.133 5.6l-3.866.915c-.573-2.252-2.278-3.141-4.247-3.141-1.759 0-3.483.68-3.483 2.447 0 2.041 2.504 2.458 5.228 3.19 3.334.87 6.987 2.142 6.987 6.662 0 4.738-3.947 6.48-8.34 6.48z",
                  fill: "parent",
                }),
                (0, a.jsx)(o.E.path, {
                  initial: m && { opacity: 0, x: -6 },
                  animate: m && u,
                  d: "M13.586 30.444c-2.209 0-4.757-.069-4.757 3.967v3.32h4.745v3.82H8.829v17.542H3.941V41.554H-.196v-3.82H3.95v-3.349c-.009-6.903 4.024-7.905 9.624-7.905v3.967zm13.493 7.287h4.886v21.367h-4.653l-.126-2.671c-1.423 1.952-3.74 3.077-6.582 3.077-4.756 0-7.686-2.614-7.686-7.393V37.728h4.934v13.315c0 3.224 1.952 4.46 4.224 4.46 2.694 0 4.992-1.532 5.009-5.5V37.729zm19.088-.406c4.779 0 7.686 2.634 7.686 7.387v14.383H48.93V45.777c0-3.23-1.952-4.46-4.203-4.46-2.695 0-5.01 1.533-5.035 5.5v12.278h-4.883V37.731h4.886v2.53c1.422-1.845 3.702-2.928 6.48-2.928zm19.355 22.148c-6.417 0-11.064-4.414-11.064-11.084 0-6.65 4.652-11.064 11.064-11.064 5.072 0 8.96 2.694 10.128 7.453l-4.54.593c-.826-2.714-2.928-4.12-5.626-4.12-3.572 0-6.132 2.825-6.132 7.135s2.577 7.134 6.132 7.134c2.695 0 4.797-1.382 5.626-4.097l4.54.573c-1.169 4.756-5.136 7.48-10.128 7.48zm18.33-.383c-3.82 0-6.118-2.252-6.118-6.245V41.554h-4.27v-3.82h1.463c2.252 0 3.29-.89 3.29-3.671v-3.31h4.46v6.986h4.653v3.82h-4.653v10.785c0 1.995 1.083 2.977 2.715 2.977h1.926v3.763h-3.483zM90.79 33.65a3.02 3.02 0 0 1-3.011-2.994 3.011 3.011 0 0 1 6.008 0 3.04 3.04 0 0 1-2.994 2.994zM88.286 59.09V37.728h4.908v21.367h-4.908zm17.216.406c-6.455 0-11.234-4.19-11.234-11.107 0-6.86 4.739-11.064 11.234-11.064 6.523 0 11.254 4.203 11.254 11.064 0 6.918-4.756 11.107-11.254 11.107zm-.043-3.947c3.713 0 6.434-2.825 6.434-7.158 0-4.315-2.715-7.14-6.434-7.14-3.654 0-6.328 2.825-6.328 7.135 0 4.33 2.671 7.157 6.328 7.157zm23.728-18.216c4.779 0 7.687 2.635 7.687 7.388v14.377h-4.923v-13.32c0-3.23-1.952-4.46-4.204-4.46-2.694 0-5.009 1.532-5.035 5.499v12.278h-4.88V37.731h4.886v2.53c1.422-1.845 3.702-2.928 6.475-2.928zm19.274 22.174c-6.661 0-10.548-5.162-10.548-15.566 0-10.385 3.82-15.544 10.548-15.544 6.691 0 10.532 5.162 10.532 15.544 0 10.407-3.91 15.566-10.532 15.566zm0-4.442c3.527 0 5.626-3.484 5.626-11.127 0-7.75-2.194-11.084-5.626-11.084-3.477 0-5.625 3.334-5.625 11.084 0 7.65 2.064 11.127 5.625 11.127zm20.997 4.43c-7.258 0-10.491-3.782-10.491-10.997l5.01-.236c0 4.43 1.038 6.918 5.478 6.918 3.54 0 5.645-2.142 5.645-5.162 0-3.334-2.251-5.122-5.22-5.122h-1.332v-3.924h1.275c2.295 0 4.097-1.825 4.097-4.304 0-2.458-1.938-3.996-4.54-3.996-3.584 0-4.373 2.545-4.373 5.528l-4.966-.21c0-6.245 3.46-9.596 9.296-9.596 5.291 0 9.17 3.446 9.17 7.906a6.829 6.829 0 0 1-4.037 6.305c2.91.826 5.625 3.23 5.625 7.65 0 5.607-4.356 9.258-10.632 9.258zm19.323-.405V26.474h4.926V59.09h-4.92zm12.8.406c-3.46 0-6.581-1.659-6.581-5.822 0-4.571 3.714-5.99 8.17-6.791l3.225-.593c1.404-.28 1.972-.916 1.972-1.926 0-2.634-2.053-3.504-4.19-3.504-2.308 0-4.203 1.025-4.528 3.76l-4.393-.8c.751-4.425 3.935-6.466 9.218-6.466 4.273 0 8.577 1.531 8.577 7.54v8.282c0 2.024.532 2.588 2.024 2.588h.336v3.334h-2.308c-2.402 0-3.841-.846-4.33-2.824h-.237c-1.658 2.335-4.393 3.23-6.96 3.23zm1.146-3.84c3.357 0 5.97-2.488 5.97-6.398l-5.455 1.21c-2.251.425-3.504 1.194-3.504 2.812 0 1.675 1.322 2.378 2.995 2.378zm25.28-18.328c5.527 0 10.108 4.272 10.108 11.107 0 6.88-4.572 11.153-10.108 11.153-3.167 0-5.882-1.489-7.134-3.91l-.127 3.415h-4.667V26.477h4.866l.026 14.588c1.295-2.358 3.947-3.74 7.044-3.74zm-1.097 18.114c3.524 0 6.328-2.715 6.328-7.007 0-4.273-2.813-6.988-6.328-6.988s-6.305 2.885-6.305 6.988c0 4.12 2.758 7.007 6.305 7.007zm19.456 4.06c-4.652 0-8.2-1.981-8.913-5.923l4.137-1.169c.573 2.422 2.378 3.585 4.779 3.585 1.759 0 3.67-.634 3.63-2.695-.043-2.421-3.147-2.715-6.564-3.866-2.758-.89-5.441-2.15-5.441-5.862 0-4.292 3.541-6.218 7.963-6.218 4.036 0 7.393 1.632 8.133 5.6l-3.866.915c-.573-2.252-2.278-3.141-4.247-3.141-1.759 0-3.483.68-3.483 2.447 0 2.041 2.504 2.458 5.228 3.19 3.334.87 6.987 2.142 6.987 6.662 0 4.738-3.947 6.48-8.34 6.48z",
                  fill: "parent",
                }),
              ],
            }),
          })
        );
      }
    },
    88685: function (e, t, i) {
      "use strict";
      i.d(t, {
        R: function () {
          return n;
        },
      });
      var a = i(64529);
      let n = (0, a.Ue)((e) => ({
        initialRender: !0,
        setInitialRender: () => e({ initialRender: !1 }),
      }));
    },
    32406: function (e, t, i) {
      "use strict";
      i.d(t, {
        d: function () {
          return n;
        },
        i: function () {
          return r;
        },
      });
      var a = i(67294);
      let n = a.useLayoutEffect;
      function r() {
        let [e, t] = (0, a.useState)({ width: 0, height: 0 });
        return (
          n(() => {
            function e() {
              t({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener("resize", e),
              e(),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          e
        );
      }
    },
    91409: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return R;
          },
        });
      var a = i(85893),
        n = i(86010),
        r = i(89439),
        o = i(5152),
        s = i.n(o),
        l = i(41664),
        c = i.n(l),
        d = i(67294),
        p = i(65820);
      function u(e) {
        let { hover: t, copied: i } = e;
        return (0, a.jsxs)(p.M, {
          mode: "popLayout",
          children: [
            t &&
              !i &&
              (0, a.jsxs)(
                r.E.svg,
                {
                  layout: !0,
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  strokeWidth: "2",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  initial: { opacity: 0, width: 0 },
                  animate: { opacity: 1, width: 24 },
                  exit: { opacity: 0, width: 0 },
                  className: "translate-y-[2px]",
                  children: [
                    (0, a.jsx)("path", {
                      stroke: "none",
                      d: "M0 0h24v24H0z",
                      fill: "none",
                    }),
                    (0, a.jsx)("rect", {
                      x: "8",
                      y: "8",
                      width: "12",
                      height: "12",
                      rx: "2",
                    }),
                    (0, a.jsx)("path", {
                      d: "M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2",
                    }),
                  ],
                },
                "copy"
              ),
            t &&
              i &&
              (0, a.jsxs)(
                r.E.svg,
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  strokeWidth: "2",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  initial: { opacity: 0, width: 0 },
                  animate: { opacity: 1, width: 24 },
                  exit: { opacity: 0, width: 0 },
                  className: "translate-y-[2px]",
                  children: [
                    (0, a.jsx)("path", {
                      stroke: "none",
                      d: "M0 0h24v24H0z",
                      fill: "none",
                    }),
                    (0, a.jsx)("path", { d: "M5 12l5 5l10 -10" }),
                  ],
                },
                "check"
              ),
          ],
        });
      }
      var m = i(10827),
        h = i(88685),
        x = i(32406),
        f = i(91513),
        y = i(80578),
        v = i(25675),
        j = i(40911);
      function w(e) {
        let {
            item: t,
            hoveredIndex: i,
            onHover: n,
            index: o,
            isPlaying: s,
          } = e,
          l = (0, d.useRef)(null),
          c = (0, v.E)(),
          u = (0, d.useMemo)(() => (t.url ? b : g), [t.url]),
          [m, h] = (0, d.useState)(!1),
          x = (0, d.useCallback)(() => {
            var e;
            m || h(!0),
              n(o),
              null === (e = l.current) || void 0 === e || e.play(),
              c.start({
                opacity: 1,
                filter: "blur(0px)",
                transition: { filter: { ease: j.m, duration: 0.2 } },
              });
          }, [c, m, o, n]),
          f = (0, d.useCallback)(() => {
            var e;
            n(null),
              null === (e = l.current) || void 0 === e || e.pause(),
              c.start({
                opacity: 1,
                filter: "blur(0px)",
                transition: { filter: { ease: j.m, duration: 0.2 } },
              });
          }, [c, n]);
        return (
          (0, d.useEffect)(() => {
            l.current && (l.current.muted = !0);
          }, []),
          (0, d.useEffect)(() => {
            var e, t;
            void 0 !== s &&
              (s
                ? null === (e = l.current) || void 0 === e || e.play()
                : null === (t = l.current) || void 0 === t || t.pause());
          }, [s]),
          (0, d.useEffect)(() => {
            if (null !== i && i !== o) {
              c.start({ opacity: 0.5, filter: "blur(2px)" });
              return;
            }
            c.start({ opacity: 1, filter: "blur(0px)" });
          }, [c, i, o]),
          (0, a.jsx)(r.E.div, {
            custom: o,
            onMouseMove: x,
            onMouseLeave: f,
            className:
              "group pointer-events-none relative flex ] h-full shrink-0 overflow-hidden rounded-lg bg-[#FBFBFB] bg-cover after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:border after:border-[rgba(0,0,0,0.08)] md:pointer-events-auto ",
            animate: c,
            style: { backgroundImage: "url(".concat(t.poster, ")") },
            children: (0, a.jsxs)(u, {
              item: t,
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "absolute bottom-0 left-0 z-[1] w-full p-4 text-[0.9375rem] md:p-6 bg-[#FBFBFB] !opacity-50",
                  style: { opacity: "0.9" },
                  children: [
                    (0, a.jsx)("h2", {
                      className: "font-medium text-black",
                      children: t.name,
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-black text-opacity-60 transition-all group-hover:opacity-0",
                      children: t.product,
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "absolute bottom-6 text-black text-opacity-60 opacity-0 transition-all group-hover:opacity-100",
                      children: t.cta,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      let b = (e) => {
          let { children: t, item: i } = e;
          return (0, a.jsx)("a", {
            href: i.url,
            className: "relative inset-0 h-0 w-0",
            target: "_blank",
            rel: "noreferrer",
            children: t,
          });
        },
        g = (e) => {
          let { children: t } = e;
          return (0, a.jsx)("div", {
            className: "relative inset-0 h-0 w-0",
            children: t,
          });
        },
        C = [
          {
            name: "",
            product: "",
            cta: "",
            video: [""],
            url: "",
            poster: "",
          },
        ]
        //N = C.slice(0, -1);
      function E() {
        let { scrollY: e } = (0, f.v)(),
          t = (0, y.H)(e, (e) => -e),
          [i, n] = (0, d.useState)(null),
          o = (0, d.useCallback)((e) => {
            n(e);
          }, []);
        return (0, a.jsx)(r.E.section, {
          style: { x: t },
          className: "hidden h-0 space-x-8 pb-8 md:flex",
          children: C.map((e, t) =>
            (0, a.jsx)(
              w,
              { item: e, index: t, hoveredIndex: i, onHover: o },
              "".concat(e.name, "-").concat(t, "-carrousel")
            )
          ),
        });
      }
      function k(e) {
        let { onChange: t, id: i, children: n } = e,
          r = (0, d.useRef)(null),
          o = (0, x.i)();
        return (
          (0, d.useEffect)(() => {
            if (r.current) {
              let e =
                window.pageYOffset +
                r.current.getBoundingClientRect().top -
                500;
              t({ position: e, id: i });
            }
          }, [i, o.width, t]),
          (0, a.jsx)("div", { ref: r, children: n })
        );
      }
      function M() {
        let { handleAddPosition: e, active: t } = (function () {
          let { scrollY: e } = (0, f.v)(),
            [t, i] = (0, d.useState)(null),
            [a, n] = (0, d.useState)({});
          (0, d.useEffect)(
            () => (
              e.on("change", (e) => {
                let t = Object.values(a).reduce(
                  (t, i, a) => (e >= i ? a : t),
                  -1
                );
                -1 === t ? i(0) : i(t);
              }),
              () => {
                e.clearListeners();
              }
            ),
            [e, a]
          );
          let r = (0, d.useCallback)((e) => {
            let { id: t, position: i } = e;
            n((e) => ((e[t] = i), e));
          }, []);
          return { active: t, handleAddPosition: r };
        })();
        return (0, a.jsx)("section", {
          className: "flex flex-col space-y-5 md:hidden",
          children: C.map((i, n) =>
            (0, a.jsx)(
              k,
              {
                onChange: e,
                id: i.name,
                children: (0, a.jsx)(w, {
                  item: i,
                  index: n,
                  onHover: () => {},
                  hoveredIndex: t,
                  isPlaying: t === n,
                }),
              },
              "".concat(i.name, "-").concat(n, "-carrousel")
            )
          ),
        });
      }
      var H = i(38293);
      let L = s()(
        () =>
          Promise.all([i.e(706), i.e(296)])
            .then(i.bind(i, 94706))
            .then((e) => e.Navigator),
        { loadableGenerated: { webpack: () => [94706] }, ssr: !1 }
      );
      function R() {
        let [e, t] = (0, d.useState)(!1),
          { width: i } = (0, x.i)(),
          [o, s] = (0, d.useState)(!1),
          l = (0, h.R)((e) => e.initialRender);
        (0, H.v)();
        let p = () => {
          navigator.clipboard.writeText("support@fn03.xyz").then(() => {
            s(!0), setTimeout(() => s(!1), 3e3);
          });
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: (0, n.Z)(
                "top-0 flex flex-col self-start px-5 md:sticky md:px-10 lg:overflow-x-hidden lg:px-20 tall:-top-[160px]"
              ),
              children: [
                (0, a.jsx)("header", {
                  className:
                    "sticky top-0 z-50 flex min-h-[133px] w-full max-w-2xl justify-between pb-[88px] pt-5 sm:pb-28 md:pt-12 lg:relative",
                  children:
                    !!i &&
                    (0, a.jsx)(m.S, {
                      className: "fill-black",
                      timer: i > 768 ? 4500 : 1200,
                    }),
                }),
                (0, a.jsx)("section", {
                  className: "mt-2 overflow-hidden",
                  children: (0, a.jsx)(L, {
                    initialState: "an independent collective of builders",
                  }),
                }),
                (0, a.jsx)(r.E.div, {
                  className: "mb-6 flex md:hidden",
                  initial: { opacity: 1 },
                  animate: {
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5 },
                  },
                  children: (0, a.jsx)("h1", {
                    className:
                      "max-w-[324px] text-[28px] font-bold leading-[115%]",
                    children: "an independent collective of builders",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "hidden flex-col space-y-1 text-[#7A7A7A] md:flex",
                  children: [
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px]",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 3 : 0.2,
                        duration: 1,
                        ease: j.m,
                      },
                      children:
                        "We are data aficionados. Engineers. Analysts. Researchers. Web3 advocates.",
                    }),
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px]",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 3.1 : 0.3,
                        duration: 1,
                        ease: j.m,
                      },
                      children:
                        "We experiment with on-chain data to develop research and exploration tools for decentralized networks.",
                    }),
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px] ",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 3.2 : 0.4,
                        duration: 1,
                        ease: j.m,
                      },
                      children:
                        "We develop our own ideas and partner with ambitious founders and protocols.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "block space-y-1 text-[#7A7A7A] md:hidden",
                  children: [
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px] ",
                      initial: { opacity: 1 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 0.6 : 0.2,
                        duration: 0.5,
                        ease: j.m,
                      },
                      children: "Engineers & Web3 advocates.",
                    }),
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px]",
                      initial: { opacity: 1 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 0.7 : 0.2,
                        duration: 0.5,
                        ease: j.m,
                      },
                      children:
                        "We experiment with on-chain data to develop research and exploration tools for decentralized networks. We develop our ideas and partner with ambitious protocols.",
                    }),
                    // (0, a.jsx)(r.E.p, {
                    //   className: "text-[15px]",
                    //   initial: { opacity: 1 },
                    //   animate: { opacity: 1 },
                    //   transition: {
                    //     delay: l ? 0.8 : 0.2,
                    //     duration: 0.5,
                    //     ease: j.m,
                    //   },
                    //   children:
                    //     "We develop our ideas and partner with ambitious protocols.",
                    // }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "mb-8 flex flex-col space-y-1 pt-6 text-[#7A7A7A] md:hidden md:pt-[64px]",
                  children: [
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px] ",
                      initial: { opacity: 1 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 0.9 : 0.5,
                        duration: 0.5,
                        ease: j.m,
                      },
                      children: "Committed to open source and public goods. ",
                    }),

                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px]",
                      initial: { opacity: 1 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 1 : 0.6,
                        duration: 0.5,
                        ease: j.m,
                      },
                      children:
                        "Leading the way in web3 exploration, one data point at a time.",
                    }),

                    // add a line trusted by and chips with names and colors for Aave, Uniswap, Reserve, Cowswap, etc.
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px] pt-8 ",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 0.9 : 0.5,
                        duration: 0.5,
                        ease: j.m,
                      },
                      children: "Trusted by:",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex space-x-2",

                      children: [
                        (0, a.jsx)("span", {
                          className: "company-name uniswap",
                          children: "Uniswap Foundation",
                        }),
                        (0, a.jsx)("span", {
                          className: "company-name reserve",
                          children: "Reserve Protocol",
                        }),
                        (0, a.jsx)("span", {
                          className: "company-name cowswap",
                          children: "Cowswap Protocol",
                        }),
                        (0, a.jsx)("span", {
                          className: "company-name indexcoop",
                          children: "IndexCoop",
                        }),
                        (0, a.jsx)("span", {
                          className: "company-name others",
                          children: "...",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "mb-8 hidden flex-col space-y-1 pt-6 text-[#7A7A7A] md:flex md:pt-[64px]",
                  children: [
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px] ",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 3.4 : 0.5,
                        duration: 1,
                        ease: j.m,
                      },
                      children: "Committed to open source and public goods.",
                    }),
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px]",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 3.5 : 0.6,
                        duration: 1,
                        ease: j.m,
                      },
                      children:
                        "Leading the way in web3 exploration, one data point at a time.",
                    }),
                    // add a line trusted by and chips with names and colors for Aave, Uniswap, Reserve, Cowswap, etc.
                    (0, a.jsx)(r.E.p, {
                      className: "text-[15px] pt-8 ",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 0.9 : 0.5,
                        duration: 0.5,
                        ease: j.m,
                      },
                      children: "Trusted by:",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex space-x-2",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: {
                        delay: l ? 0.9 : 0.5,
                        duration: 0.5,
                        ease: j.m,
                      },
                      children: [
                        (0, a.jsx)("span", {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: {
                            delay: l ? 0.9 : 0.5,
                            duration: 0.5,
                            ease: j.m,
                          },
                          className: "company-name uniswap",
                          children: "Uniswap Foundation",
                        }),
                        (0, a.jsx)("span", {
                          className: "company-name reserve",
                          children: "Reserve Protocol",
                        }),
                        (0, a.jsx)("span", {
                          className: "company-name cowswap",
                          children: "Cowswap Protocol",
                        }),
                        (0, a.jsx)("span", {
                          className: "company-name indexcoop",
                          children: "IndexCoop",
                        }),
                        (0, a.jsx)("span", {
                          className: "company-name others",
                          children: "...",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(r.E.div, {
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: l ? 1.5 : 0, duration: 0.5 },
                  },
                  children: (0, a.jsx)(M, {}),
                }),
                (0, a.jsx)(r.E.div, {
                  initial: { opacity: 0, x: -6 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "tween",
                      delay: l ? 4.8 : 1.1,
                      duration: 0.5,
                    },
                  },
                  className:
                    "relative hidden max-w-[calc(100vw-5rem)] md:block",
                  children: (0, a.jsx)(E, {}),
                }),
                (0, a.jsxs)(r.E.footer, {
                  className:
                    "group/footer mb-20 mt-10 cursor-default space-y-1 text-[#7A7A7A] md:mt-0",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: l ? 5.1 : 1.3 },
                  children: [
                    (0, a.jsxs)(r.E.p, {
                      layout: !0,
                      className: "group flex cursor-pointer",
                      onMouseMove: () => t(!0),
                      onMouseLeave: () => t(!1),
                      onClick: p,
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "transition-opacity duration-700 group-hover/footer:opacity-30",

                          children: "Reach out at",
                        }),
                        (0, a.jsxs)(r.E.span, {
                          className: "mx-1 flex",
                          children: [
                            (0, a.jsx)(u, { hover: e, copied: o }),
                            (0, a.jsx)("span", {
                              style: {
                                // bold
                                fontWeight: "bold",
                              },
                              className:
                                "font-medium underline transition-opacity duration-700 group-hover:!opacity-100 group-hover/footer:opacity-30 md:no-underline",
                              children: "support@fn03.xyz",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("a", {
                      href: "https://twitter.com/function03labs",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "block",
                      children: (0, a.jsxs)("p", {
                        className: "group",
                        children: [
                          (0, a.jsxs)("span", {
                            className:
                              "transition-opacity duration-700 group-hover/footer:opacity-30",
                            children: ["We're on", " "],
                          }),
                          (0, a.jsx)("span", {
                            style: {
                              // bold
                              fontWeight: "bold",
                            },
                            className:
                              "font-medium underline transition-opacity duration-700 group-hover:!opacity-100 group-hover/footer:opacity-30 md:no-underline",
                            children: "twitter.",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("a", {
                      href: "https://github.com/function03-labs",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "block",
                      children: (0, a.jsxs)("p", {
                        className: "group flex items-center",
                        children: [
                          (0, a.jsxs)("span", {
                            className:
                              "transition-opacity duration-700 group-hover/footer:opacity-30",
                            children: ["Checkout our projects on", " "],
                          }),
                          (0, a.jsx)("span", {
                            style: {
                              fontWeight: "bold",
                            },
                            className:
                              "flex items-center font-medium underline transition-opacity duration-700 group-hover:!opacity-100 group-hover/footer:opacity-30 md:no-underline px-2", // add padding to the parent span element
                            children: [
                              (0, a.jsx)("svg", {
                                "aria-hidden": "true",
                                height: "20",
                                version: "1.1",
                                viewBox: "0 0 16 16",
                                width: "20",
                                className: "m-1", // add margin to the svg element
                                children: (0, a.jsx)("path", {
                                  rule: "evenodd",
                                  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                                }),
                              }),
                              " ",
                              "Github.",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      R.seo = { title: "function03 labs - an independent product team" };
    },
    38293: function (e, t, i) {
      "use strict";
      i.d(t, {
        u: function () {
          return o;
        },
        v: function () {
          return s;
        },
      });
      var a = i(67294),
        n = i(64529),
        r = i(32406);
      let o = (0, n.Ue)((e) => ({
          didLoad: {},
          frequencies: {},
          playing: !1,
          volume: 0.7,
          ref: (0, a.createRef)(),
          setRef: (t) => e(() => ({ ref: t })),
          setPlaying: (t) => e(() => ({ playing: t })),
          setAudioData: (t, i) =>
            e((e) => ({ frequencies: { ...e.frequencies, [t]: i } })),
          setLoaded: (t, i) =>
            e((e) => ({ didLoad: { ...e.didLoad, [t]: i } })),
          setVolume: (t) => e(() => ({ volume: t })),
        })),
        s = () => {
          let e = o((e) => e.setPlaying),
            t = (0, r.i)();
          (0, a.useEffect)(() => {
            t.width < 768 || e(!0);
          }, [t.width]);
        };
    },
    21942: function (e, t, i) {
      "use strict";
      i.d(t, {
        _: function () {
          return a;
        },
      });
      let a = (e) => new Promise((t) => setTimeout(t, e));
    },
  },
  function (e) {
    e.O(0, [850, 100, 787, 774, 888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
