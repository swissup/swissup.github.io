---
layout: default
title: Customization
description: Social Login for Magento 2 Customization
keywords: social login customization, social login styles
category: SocialLogin
---

# Customization

> Available since version 1.1.0

You can customize social buttons styles using the following LESS variables

### LESS Variables

Variable                                                     | Default Value     | Description
-------------------------------------------------------------|-------------------|--------------------
**Buttons**                                                  |                   |
@swissup-social-login__facebook-color                        | #306199           | Facebook button color
@swissup-social-login__google-color                          | #4285F4           | Google button color
@swissup-social-login__twitter-color                         | #26c4f1           | Twitter button color
@swissup-social-login__facebook-icon-background-color        | false             | Facebook icon background color
@swissup-social-login__google-icon-background-color          | #fff              | Google icon background color
@swissup-social-login__twitter-icon-background-color         | false             | Twitter icon background color
@swissup-social-login-button__border-radius                  | false             | Button border radius
@swissup-social-login-button__padding                        | 9px 15px 9px 45px | Button padding
@swissup-social-login-button__line-height                    | 20px              | Button line height
@swissup-social-login-icon__top                              | 1px               | Icon top
@swissup-social-login-icon__left                             | 1px               | Icon left
@swissup-social-login-icon__width                            | 18px              | Icon width
@swissup-social-login-icon__height                           | 36px              | Icon height
**Account create page variables**                            |
@swissup-social-login-block__account-create__justify-content | false             | Social block justify-content
@swissup-social-login-block__account-create__margin-left     | false             | Social block left margin
@swissup-social-login-block__account-create__margin-right    | false             | Social block right margin
@swissup-social-login-block__account-create__margin-top      | false             | Social block top margin
@swissup-social-login-block__account-create__margin-bottom   | false             | Social block bottom margin
@swissup-social-login-block__account-create__width           | 50%               | Social block width
@swissup-social-login-block__account-create__min-width       | 600px             | Social block min-width
**Account login page variables**                             |                   |
@swissup-social-login-block__account-login__justify-content  | false             | Social block justify-content
@swissup-social-login-block__account-login__margin-left      | false             | Social block left margin
@swissup-social-login-block__account-login__margin-right     | false             | Social block right margin
@swissup-social-login-block__account-login__margin-top       | false             | Social block top margin
@swissup-social-login-block__account-login__margin-bottom    | false             | Social block bottom margin
@swissup-social-login-block__account-login__width            | false             | Social block width
@swissup-social-login-block__account-login__min-width        | false             | Social block min-width
**Auth popup variables**                                     |                   |
@swissup-social-login-block__auth-popup__margin-top          | 40px              | Social block top margin
@swissup-social-login-block__auth-popup__border-color        | #c1c1c1           | Social block border color
@swissup-social-login-block__auth-popup__border              | 1px solid @swissup-social-login-block__auth-popup__border-color | Social block border
@swissup-social-login-or-label__auth-popup__size             | @block-auth__or-label__size | OR label size
@swissup-social-login-or-label__auth-popup__border           | @swissup-social-login-block__auth-popup__border | OR label border
@swissup-social-login-or-label__auth-popup__color            | @swissup-social-login-block__auth-popup__border-color | OR label color
