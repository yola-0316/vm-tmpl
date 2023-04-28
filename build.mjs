import * as esbuild from "esbuild";

let cdnPlugin = {
  name: "cdn",
  setup(build) {
    // Intercept import paths called "env" so esbuild doesn't attempt
    // to map them to a file system location. Tag them with the "env-ns"
    // namespace to reserve them for this plugin.
    // build.onResolve({ filter: /^env$/ }, (args) => ({
    //   path: args.path,
    //   namespace: "env-ns",
    // }));

    // Load paths tagged with the "env-ns" namespace and behave as if
    // they point to a JSON file containing the environment variables.
    // build.onLoad({ filter: /.*/, namespace: "env-ns" }, () => ({
    //   contents: JSON.stringify(process.env),
    //   loader: "json",
    // }));

    build.onResolve({ filter: /^react/ }, (args) => ({
      // path: "https://cdn.skypack.dev/react",
      path: args.path,
      namespace: "globalExternal",
    }));

    build.onLoad({ filter: /.*/, namespace: "globalExternal" }, () => ({
      contents: "module.exports = globalThis.React",
      loader: "js",
    }));
  },
};

const result = await esbuild.build({
  entryPoints: ["app.jsx"],
  bundle: true,
  outfile: "dist/out.js",
  plugins: [cdnPlugin],
});

console.log(result);
