
vld_mockup_base
==============================================

# Folder Tree
```
 build
 htdocs
 src
   css
   js
   source
     conf
     layout
       vld_mockup_base
         base
     lib
     module
       modulename
         controller
         model
         view
   
```

The working files are in ```src```. The second Build Step is located in ```build```, but this folder content is only needed for the third step to put the compiled sources together with the external Dependencies in ```htdocs```.
The ```htdocs``` Folder is the final Web-App, without syncing or overwrites some configs from the ```src``` or ```build```



# Grunt first Time

- Installing Grunt
```
npm install grunt
```

- Installing dependencies from ```package.js```
```
npm install
```

- Now you can run:
```grunt watch```
or
```grunt export```



# App Configuration

Edit ```src/source/conf/app.php``` 

```
<?php

    return array(
    
        'debug'             => false,
        'page_base'         => 'http://'.$_SERVER['HTTP_HOST'].''.str_replace('index.php','',$_SERVER['PHP_SELF']),
        'page_name'         => 'vld_mockup_base', 
        'page_claim'        => '',
        'page_domain'       => $_SERVER['HTTP_HOST'],
        
        'layout'            => 'vld_mockup_base',
        'frontend_url'      => 'http://'.$_SERVER['HTTP_HOST'],
        
        'path_data'         => 'data/',     
        'user_secret'       => 'change!me',
    );
```

# CSS Configuration

Edit ```src/source/conf/css.php``` 

```
<?php
            $_p->addStyle("vld_main.css?".time()); 
            $_p->addStyle('assets/font-awesome.min.css');
            $_p->addStyle('fonts.css');
```



# Javascript Configuration

Edit ```src/source/conf/js.php``` 

```
<?php   
        $_p->addScript('vld_main.js?'.time());
        $_p->addScript('assets/bootstrap/bootstrap.min.js');
        $_p->addScript('assets/jquery/jquery.min.js');           
```

# HTML Meta Configuration

Edit ```src/source/conf/meta.php``` 

```
<?php
    $this->addMeta('http-equiv', 'Content-Type', 'content', 'text/html; charset=UTF-8');
    $this->addMeta('name','robots','content','index,follow');
    $this->addMeta('name','viewport','content','width=device-width, initial-scale=1, maximum-scale=1');
```

# The Router

Edit ```src/source/conf/route.php``` 

```
'login' => array(
        'label'         => 'Login',
        'module'        => 'user',
        'controller'    => 'user',
        'action'        => 'login',
        'view'          => 'login',
        'is_login'      => 'booth' | false | true,
        'is_xhr'        => true | empty or false
    ),
````

Add or edit the Array Elements.


