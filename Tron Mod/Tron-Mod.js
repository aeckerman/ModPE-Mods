ModPE.setItem(462, "record_wait", 0, "Identity Disc");

function attackHook(attacker, victim){

if(Player.getCarriedItem() == 462){

var dmg = 20;

Entity.setHealth(victim, Entity.getHealth(victim) - dmg);

}

ModPE.setItem(504, "blaze_rod", 0, "Baton");

function useItem(x, y, z, blockId, side, data){
	if(itemId == 504){
		level.setGameMode(1)
		clientMessage("RELOADING GRID GAMEMODE...")
		clientMessage("GRID RELOAD COMPLETE")
	}
}
