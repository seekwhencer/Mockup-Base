<?php

    global $_u;
    
    if(!$_u->isAuth()){
        $_p->addStyle('combined.min.css?'.time());
    } else {
        $_p->addStyle('vld_main.css?'.time());
        $_p->addStyle('vld_fonts.css?'.time());
        $_p->addStyle('assets/font-awesome.min.css');
        $_p->addStyle('assets/bootstrap.min.css');
//        $_p->addStyle('assets/flex-grid.min.css');
    }