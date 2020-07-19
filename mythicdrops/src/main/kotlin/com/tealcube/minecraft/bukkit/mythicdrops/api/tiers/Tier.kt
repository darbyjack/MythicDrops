/*
 * This file is part of MythicDrops, licensed under the MIT License.
 *
 * Copyright (C) 2019 Richard Harrah
 *
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
package com.tealcube.minecraft.bukkit.mythicdrops.api.tiers

import com.tealcube.minecraft.bukkit.mythicdrops.api.attributes.MythicAttribute
import com.tealcube.minecraft.bukkit.mythicdrops.api.enchantments.MythicEnchantment
import com.tealcube.minecraft.bukkit.mythicdrops.api.items.ItemGroup
import com.tealcube.minecraft.bukkit.mythicdrops.api.weight.IdentityWeighted
import com.tealcube.minecraft.bukkit.mythicdrops.api.weight.Weighted
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.ItemFlag

/**
 * Represents a tier
 */
interface Tier : Comparable<Tier>, IdentityWeighted, Weighted {
    val name: String
    val displayName: String
    val displayColor: ChatColor
    val identifierColor: ChatColor
    val baseLore: List<String>
    val bonusLore: List<String>
    val minimumBonusLore: Int
    val maximumBonusLore: Int
    val baseEnchantments: Set<MythicEnchantment>
    val bonusEnchantments: Set<MythicEnchantment>
    val minimumBonusEnchantments: Int
    val maximumBonusEnchantments: Int
    val isSafeBaseEnchantments: Boolean
    val isSafeBonusEnchantments: Boolean
    val isSafeRelationEnchantments: Boolean
    val isAllowHighBaseEnchantments: Boolean
    val isAllowHighBonusEnchantments: Boolean
    val isAllowHighRelationEnchantments: Boolean
    val minimumDurabilityPercentage: Double
    val maximumDurabilityPercentage: Double
    val chanceToDropOnMonsterDeath: Double
    val allowedItemGroups: Set<ItemGroup>
    val disallowedItemGroups: Set<ItemGroup>
    val allowedMaterialIds: Set<Material>
    val disallowedMaterialIds: Set<Material>
    val minimumDistanceFromSpawn: Int
    val maximumDistanceFromSpawn: Int
    val isUnbreakable: Boolean
    val chanceToHaveSockets: Double
    val minimumSockets: Int
    val maximumSockets: Int
    val isBroadcastOnFind: Boolean
    val baseAttributes: Set<MythicAttribute>
    val bonusAttributes: Set<MythicAttribute>
    val minimumBonusAttributes: Int
    val maximumBonusAttributes: Int
    val itemDisplayNameFormat: String?
    val tooltipFormat: List<String>?
    val itemFlags: Set<ItemFlag>
}
