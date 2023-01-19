const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
// (async () => await sleep(1000))();

export { sleep };
