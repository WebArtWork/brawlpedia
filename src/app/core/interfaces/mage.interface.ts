export interface Spell {
	Name: string; // Name of the spell
	Description: string; // Brief explanation of what the spell does
	Cost: number; // Resource cost to cast the spell
	Damage: number; // Amount of damage dealt to target
	Heal: number; // Amount of health restored
	Mana: number; // Mana restored to caster or drained from target
	Lifesteal: number; // Health stolen from opponent and added to caster
	Manadrain: number; // Mana drained from opponent
	Protection: number; // Damage reduction or shield strength
	Rebirth: boolean; // Whether the spell revives a character
	Duration?: number; // Duration of effect in turns
	Cooldown?: number; // Turns before spell can be reused
	Criticalchance?: number; // Chance of dealing critical (enhanced) effect
	StatusEffect?: string; // Optional status effect (e.g., burn, freeze)
	Element?: string; // Elemental type of the spell (e.g., fire, ice)
}

export interface Mage {
	Name: string; // Mage's name
	Rarity: string; // Rarity level (e.g., common, rare, legendary)
	Role: string; // Combat role (e.g., damage dealer, support)
	Health: number; // Total health points
	Mana: number; // Total mana points
	Spells: Spell[]; // Array of spells the mage can use
	Image: string; // URL or path to mage's image
}
