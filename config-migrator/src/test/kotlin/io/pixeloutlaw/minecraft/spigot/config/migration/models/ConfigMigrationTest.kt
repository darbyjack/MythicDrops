package io.pixeloutlaw.minecraft.spigot.config.migration.models

import com.github.zafarkhaja.semver.Version
import com.google.common.truth.Truth.assertThat
import com.squareup.moshi.Moshi
import io.pixeloutlaw.minecraft.spigot.config.migration.adapters.VersionAdapter
import org.junit.Assert
import org.junit.Test

class ConfigMigrationTest {
    private val moshi = Moshi.Builder().add(VersionAdapter()).add(ConfigMigrationStep.adapterFactory).build()

    @Test
    fun `can migration with no steps be parsed correctly`() {
        val jsonString = javaClass.getResource("/config_migration_no_steps.json").readText()
        val configMigration = moshi.adapter(ConfigMigration::class.java).fromJson(jsonString)
        if (configMigration == null) {
            Assert.fail("configMigration == null")
            return
        }
        assertThat(configMigration.fileName).isEqualTo("config.yml")
        assertThat(configMigration.fromVersion).isEqualTo(Version.valueOf("1.2.3"))
        assertThat(configMigration.toVersion).isEqualTo(Version.valueOf("4.5.6"))
        assertThat(configMigration.configMigrationSteps).isEmpty()
    }

    @Test
    fun `can migration with multiple steps be parsed correctly`() {
        val jsonString = javaClass.getResource("/config_migration_multiple_steps.json").readText()
        val configMigration = moshi.adapter(ConfigMigration::class.java).fromJson(jsonString)
        if (configMigration == null) {
            Assert.fail("configMigration == null")
            return
        }
        assertThat(configMigration.fileName).isEqualTo("config.yml")
        assertThat(configMigration.fromVersion).isEqualTo(Version.valueOf("1.2.3"))
        assertThat(configMigration.toVersion).isEqualTo(Version.valueOf("4.5.6"))
        assertThat(configMigration.configMigrationSteps).isNotEmpty()
        assertThat(configMigration.configMigrationSteps).hasSize(2)
        assertThat(configMigration.configMigrationSteps.any { it is RenameConfigMigrationStep }).isTrue()
        assertThat(configMigration.configMigrationSteps.any { it is DeleteConfigMigrationStep }).isTrue()
    }
}
