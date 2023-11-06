export const Conditions: {[k: string]: ConditionData} = {
	silvally: {
		name: 'Silvally',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.transformed ||
				!(pokemon.ability === 'rkssystem' || pokemon.ability === 'powerofalchemysilvally') && this.gen >= 8) {
				return types;
			}
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'rkssystem' || pokemon.ability === 'powerofalchemysilvally') {
				type = pokemon.getItem().onMemory;
				if (!type) {
					type = 'Normal';
				}
			}
			return [type];
		},
	},
	raindance: {
		name: 'RainDance',
		effectType: 'ClimateWeather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('damprock')) {
				return 8;
			}
			return 5;
		},
		onClimateWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella') || attacker.hasItem('utilityumbrella') ||
				defender.hasAbility('utilityumbrella') || attacker.hasAbility('utilityumbrella')) return;
			if (move.type === 'Water') {
				this.debug('rain water boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Fire') {
				this.debug('rain fire suppress');
				return this.chainModify(0.5);
			}
		},
		onStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-climateWeather', 'RainDance', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-climateWeather', 'RainDance');
			}
		},
		onResidualOrder: 1,
		onResidual() {
			this.add('-climateWeather', 'RainDance', '[upkeep]');
			this.eachEvent('ClimateWeather');
		},
		onEnd() {
			this.add('-climateWeather', 'none');
		},
	},
	primordialsea: {
		name: 'PrimordialSea',
		effectType: 'ClimateWeather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Fire' && move.category !== 'Status' &&
				!attacker.hasItem('utilityumbrella') && !attacker.hasAbility('utilityumbrella')) {
				this.debug('Primordial Sea fire suppress');
				this.add('-fail', attacker, move, '[from] Primordial Sea');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onClimateWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella') || attacker.hasItem('utilityumbrella') ||
				defender.hasAbility('utilityumbrella') || attacker.hasAbility('utilityumbrella')) return;
			if (move.type === 'Water') {
				this.debug('Rain water boost');
				return this.chainModify(1.5);
			}
		},
		onStart(battle, source, effect) {
			this.add('-climateWeather', 'PrimordialSea', '[from] ability: ' + effect, '[of] ' + source);
		},
		onResidualOrder: 1,
		onResidual() {
			this.add('-climateWeather', 'PrimordialSea', '[upkeep]');
			this.eachEvent('ClimateWeather');
		},
		onEnd() {
			this.add('-climateWeather', 'none');
		},
	},
	sunnyday: {
		name: 'SunnyDay',
		effectType: 'ClimateWeather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('heatrock')) {
				return 8;
			}
			return 5;
		},
		onClimateWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella') || attacker.hasItem('utilityumbrella') ||
				defender.hasAbility('utilityumbrella') || attacker.hasAbility('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Water' && !attacker.hasAbility('vaporcontrol')) {
				this.debug('Sunny Day water suppress');
				return this.chainModify(0.5);
			}
		},
		onStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-climateWeather', 'SunnyDay', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-climateWeather', 'SunnyDay');
			}
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onResidualOrder: 1,
		onResidual() {
			this.add('-climateWeather', 'SunnyDay', '[upkeep]');
			this.eachEvent('ClimateWeather');
		},
		onEnd() {
			this.add('-climateWeather', 'none');
		},
	},
	desolateland: {
		name: 'DesolateLand',
		effectType: 'ClimateWeather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Water' && move.category !== 'Status' &&
				!attacker.hasItem('utilityumbrella') && !attacker.hasAbility('utilityumbrella')) {
				this.debug('Desolate Land water suppress');
				this.add('-fail', attacker, move, '[from] Desolate Land');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onClimateWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella') || attacker.hasItem('utilityumbrella') ||
				defender.hasAbility('utilityumbrella') || attacker.hasAbility('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
		},
		onStart(battle, source, effect) {
			this.add('-climateWeather', 'DesolateLand', '[from] ability: ' + effect, '[of] ' + source);
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella') || pokemon.hasAbility('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onResidualOrder: 1,
		onResidual() {
			this.add('-climateWeather', 'DesolateLand', '[upkeep]');
			this.eachEvent('ClimateWeather');
		},
		onEnd() {
			this.add('-climateWeather', 'none');
		},
	},
};
