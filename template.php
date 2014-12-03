<?php

/**
 * implements hook_preprocess_html()
 */

function zorg_preprocess_html(&$vars) {
	// preprocess html variables
  $node = menu_get_object();
  if ($node && $node->nid && $node->nid == 316) {
    $smartforms = getcwd().base_path().path_to_theme().'/smartforms.inc';
    $vars['smartforms'] = $smartforms;
  }
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