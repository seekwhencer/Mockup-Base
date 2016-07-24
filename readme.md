
vld_mockup_base
==============================================

This is a pure PHP MVC Skeleton with Bower and Grunt.

- no template system
- simple cascading of PHP template files
- router mapping for urls to template file, module, controller and action
- using Bower to keep Dependencies up to date
  - jQuery
  - bootstrap
  - awesome font
  - flex grid
- Grunt
  - download google fonts and create fonts.css
  - compiling less, and lint
  - combining less and js
  - watch task
- login for combined or not
- additional less
  - bootstrap overrides for better box cascading
  - set grid's Stegbreite
  - set different Stegbreiten by breakpoints

## Folder Tree
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



## Grunt first Time

- Go into the Working Root folder or create one


```
    sudo mkdir /data
    cd /data
    sudo git clone https://github.com/seekwhencer/Mockup-Base.git
    sudo mv Mockup-Base myprojectfoldername
       
    sudo chown -R $USER:$GROUP /data
    sudo chmod -R 776 /data
    sudo chmod +x /data
```

- Installing Grunt and Bower
```
npm install -g bower
npm install -g grunt-cli
```

- Installing dependencies from ```package.js```
```
npm install
```

- First Run with grunt

####```grunt go``` makes a complete ```refresh``` with a following ```watch```

- Now you can run

####```grunt watch``` is the watch task while developing
####```grunt export``` makes a complete build with dependencies, without cleanup before
####```grunt refresh``` export with cleanup before
####```grunt flush``` drops all files *.js *.css *.phtml in ```build``` and ```htdocs```


The watch task compiles and sync with the build and htdocs folder.


## App Configuration

Edit Edit [src/source/conf/app.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/app.php "src/source/conf/app.php")

## HTML Header

### CSS Configuration

Edit [src/source/conf/css.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/css.php "src/source/conf/css.php")

### Javascript Configuration

Edit [src/source/conf/js.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/js.php "src/source/conf/js.php")

### Meta Configuration

Edit [src/source/conf/meta.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/meta.php "src/source/conf/meta.php")

## The Router

Edit [src/source/conf/route.php](https://github.com/seekwhencer/Mockup-base/blob/master/src/source/conf/route.php "src/source/conf/route.php") 

### Add Route or Edit Routes

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

## Cascading Templates

####Any Template is located in ```source/module/modulename/view/``` as ```*.phtml```
####In a Template you can call: ``` <?= $_c->partial(); ?> ``` after you get the ```$_c``` globally with: ```<?php global $_c; ?>```
####The Partial-Method wants two or three Arguments: ``` partial($page,$action,$path=false) ```
####```$page``` is the Template Name like ```login``` without ```.phtml```
####```$action``` is an Array of any Data 
####```$path``` is like ```source/module/modulename/view```
####The ```$action``` Data is also accessible as ```$action``` Variable in the included Template

## Todo

- better lint-ing ;)
- browser sync
- phantomjs

## Apache Configuration

- activate mod rewrite with ```sudo a2enmod rewrite ```
- edit your ```/etc/apache2/envvars``` and change the User and the Group to your own (```echo $USER``` and ```echo $GROUP``` in the shell)
- copy the file [conf/mockup.conf](https://github.com/seekwhencer/Mockup-base/blob/master/conf/mockup.conf "conf/mockup.conf") into apache's enabled sites folder and
- edit the file in the destination location. replace ``` DocumentRoot ```, ``` php_admin_value open_basedir ``` and ``` <Directory> ```
- make a apache restart ```sudo service apache2 restart``` or ```sudo service apache2 reload```
