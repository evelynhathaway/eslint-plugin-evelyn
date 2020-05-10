const {exec} = require("child_process");

const execAwaitable = function (command) {
	return new Promise(function (resolve, reject) {
		exec(command, (error, stdout) => {
			if (error) return reject(error);
			resolve(stdout.trim());
		});
	});
};

// eslint-disable-next-line no-console
const log = (message) => console.log("record-changes:", message);

(async () => {
	try {
		log("Stashing any unstaged changes.");
		const stash = await execAwaitable("git stash push -k -u -m \"Auto stash from record-changes hook\"");
		const didStash = /Saved working directory and index state/.test(stash);

		await execAwaitable("npm run record-changes");
		await execAwaitable("git add ./changes/record-changes.json");
		log("Recorded changes to the computed config.");

		if (didStash) {
			await execAwaitable("git stash pop");
			log("Popping the auto-created stash.");
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		// eslint-disable-next-line no-process-exit, unicorn/no-process-exit
		process.exit(1);
	}
})();
