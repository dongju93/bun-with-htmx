// Bun.build({
//     entrypoints: ["./src/index.tsx"],
//     outdir: "./build",
//     external: ["react"],
// });

import { type ServeOptions } from "bun";
const fileloation = "222";

Bun.serve({
    async fetch(request: Request) {
        const url = new URL(request.url);
        return new Response(url.href);
    },

    error(error) {
        console.error(error);
        return new Response("oops!");
    },

    // for enable https(cert)
    tls: {
        key: Bun.file(`${fileloation}`),
        cert: Bun.file(`${fileloation}`),
    },
} as ServeOptions);
