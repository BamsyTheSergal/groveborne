// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.tags('item', event => {
  // Add items to tags
  event.add('minecraft:sponge_crafting_material', 'minecraft:tube_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:brain_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:bubble_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:fire_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:horn_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_tube_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_brain_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_bubble_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_fire_coral_block')
  event.add('minecraft:sponge_crafting_material', 'minecraft:dead_horn_coral_block')
  // Remove items from tags
  event.remove('minecraft:coral_blocks', 'minecraft:tube_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:brain_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:bubble_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:fire_coral_block')
  event.remove('minecraft:coral_blocks', 'minecraft:horn_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_tube_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_brain_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_bubble_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_fire_coral_block')
  event.remove('minecraft:dead_coral_blocks', 'minecraft:dead_horn_coral_block')
});
ServerEvents.recipes(event => {
  // --- Recipes ---
  event.remove({id: 'everycomp:mcf/croptopia/cinnamon_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_acacia_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_azalea_hedge'})   
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_birch_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_cherry_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_cocoa_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_cherry_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_dark_oak_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_flowering_azalea_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_jungle_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_mangrove_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_oak_hedge'})
  event.remove({id: 'everycomp:mcf/dense_dynamictrees/dense_spruce_hedge'})
  event.remove({id: 'everycomp:q/croptopia/cinnamon_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_acacia_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_azalea_hedge'})   
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_birch_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_cherry_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_cocoa_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_cherry_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_dark_oak_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_flowering_azalea_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_jungle_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_mangrove_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_oak_hedge'})
  event.remove({id: 'everycomp:q/dense_dynamictrees/dense_spruce_hedge'})

  event.shapeless('minecraft:sponge', ['#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material']).id('bamsy:coral_to_sponge');
  event.shapeless('farmersdelight:rich_soil_farmland', ['farmersdelight:rich_soil', '#minecraft:hoes']).id('bamsy:hoe_richsoil_to_richfarmland');
});
LootJS.modifiers((event => {
  event.addBlockLootModifier("kubejs:arcane_essence_ore")
  .addLoot("kubejs:arcane_shard")
  .applyOreBonus("minecraft:fortune").setCount(5));
})
