import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import license from "rollup-plugin-license";
import path from "path";

export default {
  input: "src/index.js",
  output: {
    file: "dist/main-rollup.js",
    format: "iife",
    sourcemap: false
  },
  plugins: [
    resolve(),
    commonjs(),
    license({
      sourcemap: false,
      thirdParty: {
        includePrivate: true, // Default is false.
        output: {
          file: path.join(__dirname, 'dist', 'main-rollup.dependencies.txt'),

          // Lodash template that can be defined to customize report output
          template: `
            <% _.forEach(dependencies, function (dependency) { %>
              PKG: <%= dependency.name %>:<%= dependency.version%>
            <% }) %>
          `.split("\n").map((l) => l.trim()).join("\n")
        },
      },
    })
  ]
};