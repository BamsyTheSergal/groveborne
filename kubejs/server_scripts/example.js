// priority: 0
// ae
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

  event.remove({id: 'valhelsia_furniture:oak_table'})
  event.remove({id: 'valhelsia_furniture:oak_chair'})
  event.remove({id: 'valhelsia_furniture:spruce_table'})
  event.remove({id: 'valhelsia_furniture:spruce_chair'})
  event.remove({id: 'valhelsia_furniture:birch_table'})
  event.remove({id: 'valhelsia_furniture:birch_chair'})
  event.remove({id: 'valhelsia_furniture:darl_oak_table'})
  event.remove({id: 'valhelsia_furniture:dark_oak_chair'})
  event.remove({id: 'valhelsia_furniture:jungle_table'})
  event.remove({id: 'valhelsia_furniture:jungle_chair'})
  event.remove({id: 'valhelsia_furniture:mangrove_table'})
  event.remove({id: 'valhelsia_furniture:mangrove_chair'})
  event.remove({id: 'valhelsia_furniture:acacia_table'})
  event.remove({id: 'valhelsia_furniture:acacia_chair'})
  event.remove({id: 'valhelsia_furniture:warped_table'})
  event.remove({id: 'valhelsia_furniture:warped_chair'})
  event.remove({id: 'valhelsia_furniture:crimson_table'})
  event.remove({id: 'valhelsia_furniture:crimson_chair'})

  event.shapeless('minecraft:sponge', ['#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material', '#minecraft:sponge_crafting_material']).id('bamsy:coral_to_sponge');
  event.shapeless('farmersdelight:rich_soil_farmland', ['farmersdelight:rich_soil', '#minecraft:hoes']).id('bamsy:hoe_richsoil_to_richfarmland');
});
ServerEvents.recipes(event => {
  event.recipes.createCrushing(
    [
      Item.of('irons_spellbooks:arcane_essence').withChance(0.05),
                               Item.of('irons_spellbooks:arcane_essence').withChance(0.8)
    ],
    'kubejs:arcane_shard')
});
ServerEvents.recipes(event => {
  event.recipes.createMixing(
    Fluid.of('irons_spellbooks:common_ink', 500),
      [
      '2x minecraft:copper_ingot',
      Fluid.of('create_enchantment_industry:ink', 250),
      Fluid.of('create_wizardry:mana', 250)
      ]
  )
});
ServerEvents.recipes(event => {
  event.shapeless('kubejs:blaze_rod_block', ['minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod']).id('bamsy:blaze_rods_to_block_bamsy');
  event.shapeless('9x minecraft:blaze_rod', ['kubejs:blaze_rod_block']).id('bamsy:blaze_block_to_rods_bamsy');

  event.shapeless('kubejs:book_block', ['minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book', 'minecraft:book']).id('bamsy:books_to_block_bamsy');
  event.shapeless('9x minecraft:book', ['kubejs:book_block']).id('bamsy:book_block_to_books_bamsy');

  event.recipes.mekanismSawing('quark:stick_block', '9x mekanism:sawdust', Item.of('3x mekanism:sawdust').withChance(0.5));

  event.shapeless('kubejs:sawdust_block', ['mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust', 'mekanism:sawdust']).id('bamsy:sawdust_to_sawdust_block_bamsy');
  event.shapeless('9x mekanism:sawdust', ['kubejs:sawdust_block']).id('bamsy:sawdust_block_to_sawdust_bamsy');
});
ServerEvents.recipes(event => {
  event.shaped('64x kubejs:toilet_paper', ['AAA', 'ABA', 'AAA'], { A: 'minecraft:paper', B: '#minecraft:logs' }).id('bamsy:toilet_paper_craft');
  event.shaped('64x kubejs:bloody_toilet_paper', ['AAA', 'BCB', 'BBB'], { A: 'minecraft:redstone', B: 'minecraft:paper', C: '#minecraft:logs' }).id('bamsy:bloody_toilet_paper_craft');
  event.shaped('64x kubejs:slimy_toilet_paper', ['AAA', 'BCB', 'BBB'], { A: 'minecraft:slime_ball', B: 'minecraft:paper', C: '#minecraft:logs' }).id('bamsy:slimy_toilet_paper_craft');

  event.recipes.mekanismSawing('quark:stick_block', '9x minecraft:stick', Item.of('3x mekanism:sawdust').withChance(0.25));
});

LootJS.modifiers((event) => {
  event.addBlockLootModifier("kubejs:arcane_essence_ore").removeLoot("kubejs:arcane_essence_ore").addLoot(LootEntry.of("kubejs:arcane_shard").limitCount([3, 5])).applyOreBonus("minecraft:fortune");
});
