/**
 * Tests for the Data Search chat plugin
 */

'use strict';

const assert = require('../../assert').strict;

const datasearch = require('../../../dist/server/chat-plugins/datasearch');

describe("Datasearch Plugin", () => {
	it('should return pokemon with pivot moves', async () => {
		const cmd = 'ds';
		const target = 'pivot|batonpass';
		const dexSearch = datasearch.testables.runDexsearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert(dexSearch.results.includes('Ariados'));
	});

	it('should return pokemon with pivot moves, but not baton pass', async () => {
		const cmd = 'ds';
		const target = 'pivot';
		const dexSearch = datasearch.testables.runDexsearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert.false(dexSearch.results.includes('Ariados'));
		assert(dexSearch.results.includes('Azumarill-Kaskade'));
	});

	it('should return pivot moves', async () => {
		const cmd = 'ms';
		const target = 'pivot';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert(moveSearch.results.includes('U-turn'));
	});

	it('should not return pivot moves', async () => {
		const cmd = 'ms';
		const target = '!pivot';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert.false(moveSearch.results.includes('U-turn'));
	});

	it('should error', async () => {
		const cmd = 'ms';
		const target = 'pivot|!pivot';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert(moveSearch.error);
	});

	it('should return recoil moves', async () => {
		const cmd = 'ms';
		const target = 'recoil';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert(moveSearch.results.includes('Brave Bird'));
	});

	it('should not return recoil moves', async () => {
		const cmd = 'ms';
		const target = '!recoil';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert.false(moveSearch.results.includes('Brave Bird'));
	});

	it('should return recovery moves', async () => {
		const cmd = 'ms';
		const target = 'recovery';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert(moveSearch.results.includes('Absorb'));
	});

	it('should not return recovery moves', async () => {
		const cmd = 'ms';
		const target = '!recovery';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert.false(moveSearch.results.includes('Absorb'));
	});

	it('should return zrecovery moves', async () => {
		const cmd = 'ms';
		const target = 'zrecovery';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert(moveSearch.results.includes('Belly Drum'));
	});

	it('should not return zrecovery moves', async () => {
		const cmd = 'ms';
		const target = '!zrecovery';
		const moveSearch = datasearch.testables.runMovesearch(target, cmd, true, `/${cmd} ${target}`, true);
		assert.false(moveSearch.results.includes('Belly Drum'));
	});

	it('should include result where query string in ability is adjacent to special character', () => {
		const cmd = 'as';
		const target = 'water';
		const abilitySearch = datasearch.testables.runAbilitysearch(target, cmd, true, `/${cmd} ${target}`);
		assert(abilitySearch.reply.includes('Steam Engine'));
	});

	it('should exclude formes where the base Pokemon is included', () => {
		const cmd = 'ds';
		const target = 'grass, bug';
		const search = datasearch.testables.runDexsearch(target, cmd, true, `/${cmd} ${target}`);
		assert.false(search.reply.includes('Eecroach-Swarm'));
	});

	it('should include formes if a sort differentiates them from the base Pokemon', () => {
		const cmd = 'ds';
		let target = 'grass, bug, spe desc';
		let search = datasearch.testables.runDexsearch(target, cmd, true, `/${cmd} ${target}`);
		assert(search.reply.includes('Eecroach-Swarm'));

		target = 'grass, bug, hp desc';
		search = datasearch.testables.runDexsearch(target, cmd, true, `/${cmd} ${target}`);
		assert.false(search.reply.includes('Eecroach-Swarm'));
	});
});
