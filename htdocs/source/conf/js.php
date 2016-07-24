<?php
    global $_u;
    
    if(!$_u->isAuth()){
        $_p->addScript('combined.min.js?'.time());
        $_p->addScript('assets/jquery/jquery.min.js');
    } else {
        $_p->addScript('vld_main.js?'.time());
        $_p->addScript('assets/bootstrap/bootstrap.min.js');
        $_p->addScript('assets/jquery/jquery.min.js');
    }