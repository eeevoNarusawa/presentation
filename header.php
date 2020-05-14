<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/reset.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>?20191008">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/image/favicon.ico"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="description" itemprop="description" content="<?php bloginfo('description'); ?>">
    <meta name="format-detection" content="telephone=no">
    <title><?php wp_title( '|', true, 'right' ); bloginfo('name'); ?></title>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-100947288-13"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-100947288-13');
    </script>

    <?php wp_head(); ?>
  </head>

  <body>
    <div class="wrapper">
      <main>
