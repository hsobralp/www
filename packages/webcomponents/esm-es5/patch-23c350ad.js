import { C as CSS, p as plt, w as win, a as promiseResolve, d as doc, N as NAMESPACE } from './index-dc2e99e1.js';
var global$1 = (typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
        typeof window !== "undefined" ? window : {});
var __filename = '/Users/lucas.inacio/Web/Accenture/Tim/design-system/web/node_modules/@stencil/core/internal/client';
// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    }
    catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        }
        catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    }
    catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        }
        catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    }
    else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};
function noop() { }
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
    throw new Error('process.binding is not supported');
}
function cwd() { return '/'; }
function chdir(dir) {
    throw new Error('process.chdir is not supported');
}
function umask() { return 0; }
// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance$1 = global$1.performance || {};
var performanceNow = performance$1.now ||
    performance$1.mozNow ||
    performance$1.msNow ||
    performance$1.oNow ||
    performance$1.webkitNow ||
    function () { return (new Date()).getTime(); };
// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance$1) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime % 1) * 1e9);
    if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds < 0) {
            seconds--;
            nanoseconds += 1e9;
        }
    }
    return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
}
var browser$1 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
};
var noop$1 = function () {
    /* noop*/
};
var IS_DENO_ENV = typeof Deno !== 'undefined';
var IS_NODE_ENV = !IS_DENO_ENV &&
    typeof global$1 !== 'undefined' &&
    typeof require === 'function' &&
    !!global$1.process &&
    typeof __filename === 'string' &&
    (!global$1.origin || typeof global$1.origin !== 'string');
var IS_DENO_WINDOWS_ENV = IS_DENO_ENV && Deno.build.os === 'windows';
var getCurrentDirectory = IS_NODE_ENV ? browser$1.cwd : IS_DENO_ENV ? Deno.cwd : function () { return '/'; };
var exit = IS_NODE_ENV ? browser$1.exit : IS_DENO_ENV ? Deno.exit : noop$1;
var getDynamicImportFunction = function (namespace) { return "__sc_import_" + namespace.replace(/\s|-/g, '_'); };
var patchEsm = function () {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-a659079f.js').then(function () {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};
var patchBrowser = function () {
    {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    // @ts-ignore
    var scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return new RegExp("/" + NAMESPACE + "(\\.esm)?\\.js($|\\?|#)").test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE; });
    var opts = scriptElm['data-opts'] || {};
    if ('onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then: function () {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-4061ceba.js').then(function () { return opts; });
        }
    }
    return promiseResolve(opts);
};
var patchDynamicImport = function (base, orgScriptElm) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', "return import(w);//" + Math.random());
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.crossOrigin = orgScriptElm.crossOrigin;
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
export { patchEsm as a, patchBrowser as p };
