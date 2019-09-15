
import org.gradle.plugin.use.PluginDependenciesSpec
import org.gradle.plugin.use.PluginDependencySpec

/**
 * Generated by https://github.com/jmfayard/buildSrcVersions
 *
 * Find which updates are available by running
 *     `$ ./gradlew buildSrcVersions`
 * This will only update the comments.
 *
 * YOU are responsible for updating manually the dependency version.
 */
object Versions {
  const val acf_paper: String = "0.5.0-SNAPSHOT"

  const val com_diffplug_gradle_spotless_gradle_plugin: String = "3.24.2"

  const val com_github_johnrengelman_shadow_gradle_plugin: String = "5.1.0"

  const val klob: String = "0.2.1"

  const val java_semver: String = "0.9.0"

  const val auto_service: String = "1.0-rc5"

  const val truth: String = "1.0"

  const val com_gradle_build_scan_gradle_plugin: String = "2.4.1" // available: "2.4.2"

  const val worldguard_bukkit: String = "7.0.0"

  const val com_squareup_moshi: String = "1.8.0"

  const val de_fayard_buildsrcversions_gradle_plugin: String = "0.5.0"

  const val io_gitlab_arturbosch_detekt: String = "1.0.0-RC16"

  const val mockk: String = "1.9.3"

  const val io_pixeloutlaw_gradle_buildconfigkt_gradle_plugin: String = "1.0.5"

  const val io_pixeloutlaw_spigot_commons: String = "1.14.4.3"

  const val junit: String = "4.12"

  const val commons_text: String = "1.8"

  const val bstats_bukkit: String = "1.5"

  const val org_jetbrains_dokka_gradle_plugin: String = "0.9.18"

  const val org_jetbrains_kotlin_jvm_gradle_plugin: String = "1.3.50"

  const val org_jetbrains_kotlin: String = "1.3.50"

  const val junit_jupiter: String = "5.5.1" // available: "5.5.2"

  const val junit_platform_launcher: String = "none"// No version. See buildSrcVersions#23

  const val junit_vintage_engine: String = "none"// No version. See buildSrcVersions#23

  const val junit_bom: String = "5.5.2"

  const val mockito_core: String = "3.0.0"

  const val spigot_api: String = "1.14.4-R0.1-SNAPSHOT"

  const val pl_allegro_tech_build_axion_release_gradle_plugin: String = "1.10.2"

  /**
   *
   * See issue 19: How to update Gradle itself?
   * https://github.com/jmfayard/buildSrcVersions/issues/19
   */
  const val gradleLatestVersion: String = "5.6.2"

  const val gradleCurrentVersion: String = "5.6.1"
}

/**
 * See issue #47: how to update buildSrcVersions itself
 * https://github.com/jmfayard/buildSrcVersions/issues/47
 */
val PluginDependenciesSpec.buildSrcVersions: PluginDependencySpec
  inline get() =
      id("de.fayard.buildSrcVersions").version(Versions.de_fayard_buildsrcversions_gradle_plugin)
