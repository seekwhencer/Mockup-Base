<?php

    return array(
    
        'debug'             => false,
        'page_base'         => 'http://'.$_SERVER['HTTP_HOST'].''.str_replace('index.php','',$_SERVER['PHP_SELF']),
        'page_name'         => 'Mockup Base', 
        'page_claim'        => 'Valid',
        'page_domain'       => $_SERVER['HTTP_HOST'],
        
        'layout'            => 'vld_mockup_base',
        'frontend_url'      => 'http://'.$_SERVER['HTTP_HOST'],
        
        'path_data'         => 'data/',     
        'user_secret'       => 'change!me',
        
        'home_route'        => 'home'
    ); 