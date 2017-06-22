/*
* @Author: Marte
* @Date:   2017-06-13 09:12:42
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-13 14:02:36
*/

'use strict';
$(function(){
  $('.navLink ul li').mouseover(function(){
    $(this).css({'background':'#ff0000','color':'#fff'})
  })
  $('.navLink ul li').mouseleave(function(){
    $(this).css({'background':'#fff','color':'#000'})
  })
})

