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
package com.tealcube.minecraft.bukkit.mythicdrops.items

import com.tealcube.minecraft.bukkit.mythicdrops.api.items.ItemGroup
import org.bukkit.Material
import org.bukkit.configuration.ConfigurationSection

data class MythicItemGroup(
    override val name: String,
    override val materials: Set<Material>,
    override val isInverse: Boolean = false
) : ItemGroup {
    companion object {
        @JvmStatic
        fun fromConfigurationSection(configurationSection: ConfigurationSection, key: String): ItemGroup =
            MythicItemGroup(
                key,
                configurationSection.getStringList(key).mapNotNull(Material::getMaterial).toSet()
            )
    }

    override fun addMaterials(vararg material: Material): ItemGroup = copy(materials = materials.plus(material))

    override fun removeMaterials(vararg material: Material): ItemGroup = copy(materials = materials.minus(material))

    override fun inverse(): ItemGroup = copy(isInverse = !isInverse)
}