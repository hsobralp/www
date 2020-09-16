import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from "@stencil/sass";
import nodeSassPackageImporter from "node-sass-package-importer";
import nodePolyfills from "rollup-plugin-node-polyfills";
export const config = {
    namespace: "tim-components",
    preamble: "TIM DS",
    taskQueue: "async",
    globalStyle: "src/styles/app.scss",
    rollupPlugins: {
        after: [nodePolyfills()],
    },
    outputTargets: [
        reactOutputTarget({
            componentCorePackage: "@tim-ds/web",
            proxiesFile: "dist-react/components.ts",
        }),
        {
            type: "dist",
            esmLoaderPath: "../loader",
        },
        {
            type: "docs-readme",
        },
        {
            type: "www",
            serviceWorker: null,
            copy: [{ src: "vendor" }, { src: "components" }],
        },
    ],
    plugins: [
        sass({
            importer: nodeSassPackageImporter(),
            injectGlobalPaths: ["src/styles/variables.scss"],
        }),
    ],
};
