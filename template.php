<?php

/**
 * Uses RDFa attributes if the RDF module is enabled
 * Lifted from Adaptivetheme for D7, full credit to Jeff Burnz
 * ref: http://drupal.org/node/887600
 */
function zorg_preprocess_html(&$vars) {
	// preprocess html variables
  $node = menu_get_object();
  if ($node && $node->nid && $node->nid == 316) {
    $smartforms = getcwd().base_path().path_to_theme().'/smartforms.inc';
    $vars['smartforms'] = $smartforms;
  }
  
  // Ensure that the $vars['rdf'] variable is an object.
  if (!isset($vars['rdf']) || !is_object($vars['rdf'])) {
    $vars['rdf'] = new StdClass();
  }

  if (module_exists('rdf')) {
    $vars['doctype'] = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML+RDFa 1.1//EN">' . "\n";
    $vars['rdf']->version = 'version="HTML+RDFa 1.1"';
    $vars['rdf']->namespaces = $vars['rdf_namespaces'];
    $vars['rdf']->profile = ' profile="' . $vars['grddl_profile'] . '"';
  } else {
    $vars['doctype'] = '<!DOCTYPE html>' . "\n";
    $vars['rdf']->version = '';
    $vars['rdf']->namespaces = '';
    $vars['rdf']->profile = '';
  }
  

 // use the $html5shiv variable in their html.tpl.php
  $element = array(  
    'element' => array(
    '#tag' => 'script',
    '#value' => '',
    '#attributes' => array(
      'src' => '//html5shiv.googlecode.com/svn/trunk/html5.js',
     ),
   ),
 );

 $shimset = theme_get_setting('boron_shim');
 $script = theme('html_tag', $element);
 //If the theme setting for adding the html5shim is checked, set the variable.
 if ($shimset == 1) { $vars['html5shim'] = "\n<!--[if lt IE 9]>\n" . $script . "<![endif]-->\n"; }

}

/*
 * implements hook_preprocess_page()
 */

function zorg_preprocess_page(&$vars) {
  // preprocess node variables
  if($vars['theme_hook_suggestions'] && isset($vars['node'])) {
    $vars['theme_hook_suggestions'][] = 'page__'.$vars['node']->type;
  }
}

/**
 * implements hook_css_alter()
 */

function zorg_css_alter(&$css){
  $exclude = array(
    //'modules/system/system.css' => FALSE,
    //'modules/system/system.admin.css' => FALSE,
    //'modules/system/system.base.css' => FALSE,
    //'modules/system/system.maintenance.css' => FALSE,
    'modules/system/system.menus.css' => FALSE,
    //'modules/system/system.messages.css' => FALSE,
    //'modules/system/system.theme.css' => FALSE,
  );
  
  $css = array_diff_key($css, $exclude);
  
}