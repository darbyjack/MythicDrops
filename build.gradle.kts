import com.diffplug.gradle.spotless.SpotlessExtension
import com.diffplug.gradle.spotless.SpotlessPlugin
import io.gitlab.arturbosch.detekt.DetektPlugin
import io.gitlab.arturbosch.detekt.extensions.DetektExtension
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import pl.allegro.tech.build.axion.release.domain.TagNameSerializationConfig

plugins {
    base
    `build-scan`
    kotlin("jvm") version "1.3.41" apply false
    id("com.diffplug.gradle.spotless") version "3.23.1" apply false
    id("de.fayard.buildSrcVersions") version "0.3.2"
    id("pl.allegro.tech.build.axion-release") version "1.10.2"
    id("io.gitlab.arturbosch.detekt") version "1.0.0-RC16" apply false
}

// order matters for this plugin, so we configure it first
scmVersion {
    tag(closureOf<TagNameSerializationConfig> {
        prefix = ""
    })
}

rootProject.version = scmVersion.version

subprojects {
    this@subprojects.version = rootProject.version
    pluginManager.withPlugin("org.jetbrains.kotlin.jvm") {
        this@subprojects.pluginManager.apply(DetektPlugin::class.java)
        this@subprojects.pluginManager.apply(SpotlessPlugin::class.java)
        this@subprojects.configure<DetektExtension> {
            baseline = this@subprojects.file("baseline.xml")
        }
        this@subprojects.configure<SpotlessExtension> {
            kotlin {
                target("src/**/*.kt")
                ktlint()
            }
        }
        this@subprojects.tasks.withType<KotlinCompile> {
            dependsOn("spotlessKotlinApply")
            kotlinOptions {
                jvmTarget = "1.8"
            }
        }

        this@subprojects.configurations {
            "compileClasspath" {
                resolutionStrategy.force(
                    "com.sk89q.worldedit:worldedit-bukkit:7.0.0",
                    "org.bukkit:bukkit:1.14.4-R0.1-SNAPSHOT"
                )
            }
        }
    }
}

buildScan {
    termsOfServiceUrl = "https://gradle.com/terms-of-service"
    termsOfServiceAgree = "yes"

    publishAlways()
}