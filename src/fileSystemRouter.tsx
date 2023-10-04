const router = new Bun.FileSystemRouter({
    style: "nextjs",
    dir: "./pages",
});

const theMatch = router.match("/");

console.log(theMatch);
