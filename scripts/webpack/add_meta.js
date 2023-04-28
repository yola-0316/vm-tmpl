const webpack = require("webpack");

module.exports = (pkgJson) => {
  const metadata = pkgJson.metadata ?? {};
  const meta = {
    name: metadata.name ?? pkgJson.name ?? "My Script",
    namespace: metadata.namespace ?? "Violentmonkey Scripts",
    description: metadata.description ?? pkgJson.description ?? "This is a userscript.",
    version: process.env.VERSION ?? (metadata.version || pkgJson.version) ?? "0.1.0",
    author: process.env.AUTHOR ?? (metadata.author || pkgJson.author) ?? "Anonymous",
    match: metadata.match ?? "*://*.baidu.com/*",
    grant: metadata.grant ?? "GM_addStyle",
    require:
      metadata.require ??
      "https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7",
  };
  return new webpack.BannerPlugin({
    banner: `// ==UserScript==
// @name        ${meta.name}
// @namespace   ${meta.namespace}
// @description ${meta.description}
// @version     ${meta.version}
// @author      ${meta.author}
// @match       *://*.baidu.com/*
// @grant       GM_addStyle
// @require     https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7
// ==/UserScript==
    `,
    raw: true,
    entryOnly: true,
  });
};
