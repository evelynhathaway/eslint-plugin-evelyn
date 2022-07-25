const {exec} = require("node:child_process");


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

// Top-level await is not supported in CommonJS and this file isn't transpiled
// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
	let didStash;

	try {
		log("Stashing any unstaged changes...");
		const stash = await execAwaitable("git stash push -k -u -m \"Auto stash from record-changes hook\"");
		didStash = /Saved working directory and index state/.test(stash);
		if (!didStash) {
			log("No stash created, there were unstaged no changes.");
		}

		log("Recording changes to the computed config in this commit...");
		await execAwaitable("npm run record-changes");

		log("Adding recorded changes to this commit...");
		await execAwaitable("git add ./changes/record-changes.json");

		if (didStash) {
			log("Popping the auto-created stash...");
			await execAwaitable("git stash pop");
		}

		log("Completed! Thanks for being patient. <3");
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);

		if (didStash) {
			log("An error occurred. Popping the auto-created stash...");
			await execAwaitable("git stash pop");
		}

		// eslint-disable-next-line unicorn/no-process-exit
		process.exit(1);
	}
})();
