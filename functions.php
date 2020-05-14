<?php
  function my_scripts() {
  wp_enqueue_script( 'kick-ring.js', get_template_directory_uri() . '/kick-ring.js', array( 'jquery' ), '3.0.2', true );
  }
  add_action( 'wp_enqueue_scripts', 'my_scripts' );


  add_theme_support('post-thumbnails');

  add_action( 'wp_enqueue_scripts', 'delete_plugin_css' );
  function delete_plugin_css() {
      wp_deregister_style( 'contact-form-7' );
  }
