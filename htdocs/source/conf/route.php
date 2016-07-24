<?php

$this->route = array(
			
    'home' => array(
    
        'label'			=>'Home',
        'slug'			=>'home',
        'module'		=>'main',
        'controller'	=>'main',
        'action'		=>'index',
        'view'			=>'home',
        'is_login'		=>'both',       								
    ),
   
    'example' => array(
    
        'label'         =>'Example',
        'slug'          =>'example',
        'module'        =>'main',
        'controller'    =>'main',
        'action'        =>'example',
        'view'          =>'example',
        'is_login'      =>'both',                                       
    ),
   
	'login' => array(
		'label'			=> 'Login',
		'module' 		=> 'user',
		'controller' 	=> 'user',
		'action' 		=> 'login',
		'view'			=> 'login',
		'is_login'		=> false,
	),
	
	'logout' => array(
		'module' 		=> 'user',
		'controller' 	=> 'user',
		'action' 		=> 'logout',
		'view'			=> 'logout',
		'is_login'		=> true,
	),

     
    /**
     *  Config
     * 
     */
     'valid/config' => array(
        'label'         => 'Valid',
        'module'        => 'Valid',
        'controller'    => 'config',
        'action'        => 'index',
        'view'          => 'index/config',
        'is_login'      => true
    ),
	
);

?>