// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// SwSe Popular Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "SwSe Popular Randomized Metas",
	},
	{
		name: "[Gen 9] Random Doubles Battle",
		desc: `Double battle with randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,

		mod: 'swse',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 9] Unrated Random Doubles Battle",

		mod: 'swse',
		gameType: 'doubles',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,

		mod: 'swse',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Unrated Random Battle",

		mod: 'swse',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Free-For-All Random Battle",

		mod: 'swse',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Random Battle (Blitz)",

		mod: 'swse',
		team: 'random',
		ruleset: ['[Gen 9] Random Battle', 'Blitz'],
	},
	{
		name: "[Gen 9] Multi Random Battle",

		mod: 'swse',
		team: 'random',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod',
		],
	},

	// SwSe Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "SwSe Doubles",
	},
	{
		name: "[Gen 9] Doubles OU",
		threads: [
			`&bullet; <a href="https://discord.gg/zMxa5bGagw">DOU Discord channel</a>`,
		],

		mod: 'swse',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Arena Trap', 'Shadow Tag'],
	},
	/* {
		name: "[Gen 9] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712864/">Doubles Ubers</a>`,
		],

		mod: 'swse',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
	}, */
	/* {
		name: "[Gen 9] Doubles UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712825/">Doubles UU</a>`,
		],

		mod: 'swse',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	}, */
	{
		name: "[Gen 9] Doubles LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710957/">Doubles LC</a>`,
		],

		mod: 'swse',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup'],
		banlist: [],
	},
	{
		name: "[Gen 9] Doubles Monotype",
		desc: `Double battle where all Pok&eacute;mon on your team must share a common type.`,
		threads: [
			`&bullet; <a href="https://discord.gg/3aEUWwwDys">OM Discord channel</a>`,
		],

		mod: 'swse',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Same Type Clause'],
		banlist: [
			'Arena Trap', 'Shadow Tag',
		],
	},
	{
		name: "[Gen 9] 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710849/">2v2 Doubles</a>`,
		],

		mod: 'swse',
		gameType: 'doubles',
		ruleset: [
			'Picked Team Size = 2', 'Max Team Size = 4',
			'Standard Doubles', 'Accuracy Moves Clause', 'Sleep Clause Mod',
		],
		banlist: [
			'Commander',
			'Ally Switch', 'Final Gambit', 'Perish Song',
			'Focus Band', 'Focus Sash', 'King\'s Rock', 'Quick Claw',
		],
	},
	{
		name: "[Gen 9] Doubles Custom Game",

		mod: 'swse',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// SwSe Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "SwSe Singles",
	},
	{
		name: "[Gen 9] OU",
		threads: [
			`&bullet; <a href="https://discord.gg/zEFfyzvffa">OU Discord channel</a>`,
		],

		mod: 'swse',
		ruleset: ['Standard'],
		banlist: [
			'Uber', 'AG',
			'Arena Trap', 'Shadow Tag',
			'Baton Pass',
			'King\'s Rock',
		],
	},
	/* {
		name: "[Gen 9] Ubers",
		threads: [
			`&bullet; <a href="https://discord.gg/BXfzNWuU54">Ubers Discord channel</a>`,
		],

		mod: 'swse',
		ruleset: ['Standard'],
		banlist: [
			'AG',
			'Baton Pass',
			'King\'s Rock',
		],
	}, */
	/* {
		name: "[Gen 9] UU",
		threads: [
			`&bullet; <a href="https://discord.gg/zuQ6MaMEwK">UU Discord channel</a>`,
		],

		mod: 'swse',
		ruleset: ['[Gen 9] OU'],
		banlist: ['OU', 'UUBL'],
	}, */
	/* {
		name: "[Gen 9] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725482/">RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729823/">RU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717072/">RU Sample Teams</a>`,
		],

		mod: 'swse',
		ruleset: ['[Gen 9] UU'],
		banlist: ['UU', 'RUBL',],
	},
	{
		name: "[Gen 9] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715408/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729943/">NU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730216/">NU Sample Teams</a>`,
		],

		mod: 'swse',
		ruleset: ['[Gen 9] RU'],
		banlist: ['RU', 'NUBL', 'Quick Claw'],
	},
	{
		name: "[Gen 9] PU",

		mod: 'swse',
		ruleset: ['[Gen 9] NU'],
		banlist: ['NU', 'PUBL'],
	}, */
	{
		name: "[Gen 9] LC",
		threads: [
			`&bullet; <a href="https://discord.gg/6dKHQAR3DW">LC Discord channel</a>`,
		],

		mod: 'swse',
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Baton Pass',
			'King\'s Rock',
		],
	},
	{
		name: "[Gen 9] Monotype",
		desc: `All Pok&eacute;mon on your team must share a common type.`,
		threads: [
			`&bullet; <a href="https://discord.gg/3aEUWwwDys">OM Discord channel</a>`,
		],

		mod: 'swse',
		ruleset: ['Standard', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Arena Trap', 'Shadow Tag',
			'Baton Pass',
			'King\'s Rock',
		],
	},
	{
		name: "[Gen 9] Custom Game",

		mod: 'swse',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// Unofficial Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Unofficial Metagames",
	},
	{
		name: "[Gen 9] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,

		mod: 'swse',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Terastal Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause', '!Sleep Clause Mod',
		],
		banlist: [
			'Manadza', 'Arctikull',
			'Acupressure', 'Perish Song',
			'Focus Band', 'Focus Sash', 'King\'s Rock', 'Quick Claw',
		],
	},
	{
		name: "[Gen 9] Anything Goes",

		mod: 'swse',
		ruleset: ['Min Source Gen = 9', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	/* {
		name: "[Gen 9] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719022/">ZU Metagame Discussion</a>`,
		],

		mod: 'swse',
		ruleset: ['[Gen 9] PU'],
		banlist: ['PU'],
	},
	{
		name: "[Gen 9] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711750/">LC UU Metagame Discussion</a>`,
		],

		mod: 'swse',
		searchShow: false,
		ruleset: ['[Gen 9] LC'],
		banlist: [],
	},
	{
		name: "[Gen 9] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710638/">NFE</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712567/">NFE Resources</a>`,
		],

		mod: 'swse',
		searchShow: false,
		ruleset: ['Standard OMs', 'Not Fully Evolved', 'Sleep Moves Clause'],
		banlist: [
			'Arena Trap', 'Shadow Tag',
			'Baton Pass',
		],
	}, */
	{
		name: "[Gen 9] Free-For-All",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711724/">Free-For-All</a>`,
		],

		mod: 'swse',
		gameType: 'freeforall',
		rated: false,
		tournamentShow: false,
		ruleset: ['Standard', '!Evasion Items Clause'],
		banlist: [
			'Arena Trap', 'Shadow Tag',
			'Acupressure', 'Aromatic Mist', 'Baton Pass', 'Court Change', 'Final Gambit', 'Flatter',
			'Follow Me', 'Heal Pulse', 'Last Respects', 'Poison Fang', 'Rage Powder', 'Spicy Extract', 'Swagger', 'Toxic', 'Toxic Spikes',
		],
	},
	{
		name: "[Gen 9] Pokemoves",
		desc: `Put a Pok&eacute;mon's name in a moveslot to turn them into a move. The move has 8 PP, 100% accuracy, and a category and Base Power matching their highest attacking stat. Use /pokemove for more info.`,
		mod: 'pokemoves',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Allowed Pokemoves = 1', 'Unique Pokemoves = 1'],
		banlist: [
			'Arceus', 'Annihilape', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin',
			'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hoopa-Unbound', 'Ho-Oh', 'Iron Bundle', 'Koraidon',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin',
			'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Regieleki', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Moody', 'Shadow Tag', 'Damp Rock', 'King\'s Rock', 'Razor Fang', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Araquanid', 'Baxcalibur', 'Beartic', 'Cacnea', 'Cacturne', 'Chandelure', 'Conkeldurr', 'Crabominable', 'Cubchoo', 'Dewpider', 'Diglett', 'Diglett-Alola', 'Dragonite',
			'Dugtrio', 'Dugtrio-Alola', 'Enamorus', 'Enamorus-Therian', 'Excadrill', 'Froslass', 'Gabite', 'Garchomp', 'Gholdengo', 'Gible', 'Glaceon', 'Glastrier', 'Great Tusk',
			'Grimer-Base', 'Hatterene', 'Haxorus', 'Hoopa-Confined', 'Iron Hands', 'Iron Moth', 'Iron Thorns', 'Kingambit', 'Landorus-Therian', 'Medicham', 'Meditite', 'Metagross',
			'Muk-Base', 'Ninetales-Alola', 'Polteageist', 'Porygon-Z', 'Raging Bolt', 'Rampardos', 'Regigigas', 'Rhyperior', 'Roaring Moon', 'Salamence', 'Sandshrew', 'Sandshrew-Alola',
			'Sandslash', 'Sandslash-Alola', 'Skuntank', 'Slaking', 'Slither Wing', 'Stunky', 'Thundurus-Therian', 'Tyranitar', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Vikavolt', 'Volcarona',
			'Vulpix-Alola', 'Yanma', 'Yanmega',
		],
		validateSet(set, teamHas) {
			let pokemoves = 0;
			const problems: string[] = [];
			const moves = [];
			if (set.moves?.length) {
				if (set.moves.length > this.ruleTable.maxMoveCount) {
					problems.push(`${set.name} has ${set.moves.length} moves, which is more than the limit of ${this.ruleTable.maxMoveCount}.`);
					return problems;
				}
				for (const [i, moveid] of set.moves.entries()) {
					const pokemove = this.dex.species.get(moveid);
					if (!pokemove.exists) continue;
					if (pokemove.isNonstandard &&
						!(this.ruleTable.has(`+pokemontag:${this.toID(pokemove.isNonstandard)}`) ||
							this.ruleTable.has(`+pokemon:${pokemove.id}`) ||
							this.ruleTable.has(`+basepokemon:${this.toID(pokemove.baseSpecies)}`))) {
						problems.push(`${pokemove.isNonstandard} Pok\u00e9mon are not allowed to be used as Pokemoves.`);
					}
					if (this.ruleTable.isRestrictedSpecies(pokemove) || this.ruleTable.isBannedSpecies(pokemove)) {
						problems.push(`${pokemove.name} is unable to be used as a Pokemove.`);
					}
					pokemoves++;
					moves.push(moveid);
					set.moves.splice(i, 1);
				}
			}
			const allowedPokemoves = this.ruleTable.valueRules.get('allowedpokemoves') || 1;
			if (pokemoves > Number(allowedPokemoves)) {
				problems.push(
					`${set.species} has ${pokemoves} Pokemoves.`,
					`(Pok\u00e9mon can only have ${allowedPokemoves} Pokemove${allowedPokemoves + '' === '1' ? '' : 's'} each.)`
				);
			}
			if (this.validateSet(set, teamHas)) {
				return this.validateSet(set, teamHas);
			}
			set.moves.push(...moves);
			return problems.length ? problems : null;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				for (const move of pokemon.moves) {
					const pokemove = this.dex.species.get(move);
					if (pokemove.exists) {
						pokemon.m.pokemove = pokemove;
						const idx = pokemon.moveSlots.findIndex(x => x.id === pokemove.id);
						if (idx >= 0) {
							pokemon.moveSlots[idx] = pokemon.baseMoveSlots[idx] = {
								move: pokemove.name,
								id: pokemove.id,
								pp: 8,
								maxpp: 8,
								target: 'normal',
								disabled: false,
								disabledSource: '',
								used: false,
							};
						}
					}
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.pokemove) return;
			const pokemove = pokemon.m.pokemove;
			if (!pokemove.exists) return;
			// Place volatiles on the Pokémon to show the pokemove.
			this.add('-start', pokemon, pokemove.name, '[silent]');
		},
		onModifyMovePriority: 999,
		onModifyMove(move, pokemon, target) {
			const species = this.dex.species.get(move.id);
			if (species.exists) {
				move.type = species.types[0];
				move.basePower = Math.max(species.baseStats['atk'], species.baseStats['spa']);
				move.accuracy = 100;
				move.flags = {};
				move.flags['protect'] = 1;
				move.category = species.baseStats['spa'] >= species.baseStats['atk'] ? 'Special' : 'Physical';
				move.onAfterHit = function (t, s, m) {
					if (s.getAbility().name === species.abilities['0']) return;
					const effect = 'ability:' + this.toID(species.abilities['0']);
					if (s.volatiles[effect]) return;
					s.addVolatile(effect);
					if (s.volatiles[effect]) {
						(s.volatiles[effect] as any).id = this.toID(effect);
						(s.volatiles[effect] as any).target = s;
					}
				};
			}
		},
	},
	{
		name: "[Gen 9] Pure Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,

		mod: 'swse',
		searchShow: false,
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Endless Battle Clause'],
	},

	// OM of the Month
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,

		mod: 'swse',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause'],
		banlist: [
			'Baton Pass', 'Last Respects', 'Revival Blessing', 'Shed Tail',
			'King\'s Rock',
		],
	},

	// Misc. Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Misc. Randomized Metas",
		column: 3,
	},
	/* {
		name: "[Gen 9] Monotype Random Battle",

		mod: 'swse',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Challenge Cup 1v1",
		desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose one to battle.`,

		mod: 'swse',
		team: 'randomCC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Terastal Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 9] Challenge Cup 2v2",
		desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose two to battle in a doubles format.`,

		mod: 'swse',
		team: 'randomCC',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 2'],
	},
	{
		name: "[Gen 9] Challenge Cup 6v6",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item.`,

		mod: 'swse',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	}, */
];
