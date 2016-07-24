
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

Edit Edit [src/source/conf/app.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/app.php "src/source/conf/app.php")

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

Edit [src/source/conf/css.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/css.php "src/source/conf/css.php")

# Javascript Configuration

Edit [src/source/conf/js.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/js.php "src/source/conf/js.php")

# HTML Meta Configuration

Edit [src/source/conf/meta.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/meta.php "src/source/conf/meta.php")

# The Router

Edit [src/source/conf/route.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/route.php "src/source/conf/route.php") 

# Add Route or Edit Routes

```
    'slug' => array(
        'label'         => 'Changeme',
        'module'        => 'modulename',
        'controller'    => 'controllername',
        'action'        => 'actioname',
        'view'          => 'templatename',
        'is_login'      => 'booth' | false | true,
        'is_xhr'        => true | empty or false
    ),
````

#### ```slug``` is the Page URL Path like ```my/path/to/somewhere```
#### The Array is located in the global Object ```$_p->content```.

# Cascading Templates

####Any Template is located in ```source/module/modulename/view/``` as ```*.phtml```. In a Template you can call: ``` <?= $_c->partial(); ?> ``` after you get the ```$_c``` globally with: ```<?php global $_c; ?>```
####The Partial-Method wants two or thre Arguments: ``` partial($page,$action,$path=false) ```.
####```$page``` is the Template Name like ```login``` without ```.phtml```. ```$action``` is an Array of any Data and ```path``` is like ```source/module/modulename/view```.
####The ```$action``` Data is also accessible as ```$action``` Variable in the included Template.



