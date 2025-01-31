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
package com.tealcube.minecraft.bukkit.mythicdrops.tiers

import com.tealcube.minecraft.bukkit.mythicdrops.api.choices.Choice
import com.tealcube.minecraft.bukkit.mythicdrops.api.choices.IdentityWeightedChoice
import com.tealcube.minecraft.bukkit.mythicdrops.api.choices.WeightedChoice
import com.tealcube.minecraft.bukkit.mythicdrops.api.tiers.Tier
import com.tealcube.minecraft.bukkit.mythicdrops.api.tiers.TierManager
import org.bukkit.ChatColor
import java.util.Locale

internal class MythicTierManager : TierManager {
    private val managedTiers = mutableMapOf<String, Tier>()

    override fun get(): Set<Tier> = managedTiers.values.toSet()

    override fun contains(id: String): Boolean = managedTiers.containsKey(id.lowercase(Locale.getDefault()))

    override fun add(toAdd: Tier) {
        managedTiers[toAdd.name.lowercase(Locale.getDefault())] = toAdd
    }

    override fun addAll(toAdd: Collection<Tier>) {
        toAdd.forEach { add(it) }
    }

    override fun remove(id: String) {
        managedTiers.remove(id.lowercase(Locale.getDefault()))
    }

    override fun getById(id: String): Tier? = managedTiers[id.lowercase(Locale.getDefault())]

    override fun clear() {
        managedTiers.clear()
    }

    override fun random(): Tier? = Choice.between(get()).choose()

    override fun randomByWeight(block: (Tier) -> Boolean): Tier? =
        WeightedChoice.between(get()).choose(block)

    override fun randomByIdentityWeight(block: (Tier) -> Boolean): Tier? =
        IdentityWeightedChoice.between(get()).choose(block)

    override fun hasWithSameColors(displayColor: ChatColor, identifierColor: ChatColor): Boolean =
        managedTiers.values.any { it.displayColor == displayColor && it.identifierColor == identifierColor }

    override fun getWithColors(displayColor: ChatColor, identifierColor: ChatColor): Tier? =
        managedTiers.values.find { it.displayColor == displayColor && it.identifierColor == identifierColor }

    override fun getByName(name: String): Tier? =
        getById(name) ?: get().find {
            it.name.equals(
                name,
                ignoreCase = true
            ) || it.displayName.equals(name, ignoreCase = true)
        }
}
