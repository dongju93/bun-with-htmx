const file = Bun.file("package.json");
const contents = await file.json();

if (contents.scripts) {
    contents.scripts.start = "bun run src/files.ts";
}

Bun.write("package.json", JSON.stringify(contents, null, 2));

const { file: theFile, path, dir, main, url } = import.meta;
console.log({
    file: theFile,
    path,
    dir,
    main,
    url,
});

const txt = `${import.meta.dir}/test/test.txt`;
console.log(txt);
