<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     SAM_Gutenberg
 * @author      Andrea Barghigiani
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: SAM Gutenberg Blocks
 * Plugin URI:  https://skillsandmore.org
 * Description: A plugin containing blocks for SkillsAndMore.
 * Version:     0.2.0
 * Author:      Andrea Barghigiani
 * Author URI:  https://twitter.com/zgordon
 * Text Domain: sam-gutenberg
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

// namespace SAM_Gutenberg;
namespace SAM_Gutenberg;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  1.0.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register meta boxes
// include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
// include __DIR__ . '/lib/block-templates.php';

// Dynamic Blocks
// include __DIR__ . '/blocks/12-dynamic/index.php';
