---
layout: default
title: Firecheckout and Hermes theme
description: Firecheckout styles for Hermes theme
keywords: firecheckout for hermes theme
category: Firecheckout
---

# Firecheckout & Hermes Theme

 1. Create `_custom.less` in
    `app/design/frontend/bs_hermes/bs_hermes/Swissup_Firecheckout/web/css` folder.
 2. Add the following styles:

    ```scss
    @firecheckout-section__padding: 20px 20px;
    @firecheckout-section__background: #fff;
    @firecheckout-section__border: 2px solid rgba(0, 0, 0, 0.1);

    .firecheckout {
        .page-main {
            padding-top: 20px;
        }
        .header-container .header .logo {
            position: static;
        }
        .authentication-wrapper {
            margin-top: -55px;
        }
    }

    .firecheckout #checkout {
        .fieldset > .field {
            > .label {
                width: 36%;
                vertical-align: top;
                margin: 5px 0 0;
                padding: 0 5px 0 0;
                box-sizing: border-box;
                text-align: right;
                word-wrap: break-word;
                white-space: normal;

                &:after {
                    position: static;
                    margin: 0;
                }
            }
            > .control {
                display: inline-block;
                width: 61%;
            }
        }
        .step-title,
        .opc-block-summary > .title {
            padding-bottom: 20px;
        }

        .opc-sidebar .modal-header {
            padding: 0;
        }

    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .firecheckout {
            #checkout {
                width: auto;
                padding-left: 0;
                padding-right: 0;
            }
            .table-checkout-shipping-method {
                border: none;
                thead {
                    display: none
                }
                td {
                    border: none;
                    padding: 0 5px;
                }
            }
        }
    }
    ```

 3. Save the file and run following bash commands to regenerate compiled styles

    ```bash
    cd magento/root/folder

    # remove previously deployed firecheckout styles
    find pub/static var/view_preprocessed -type d -regex ".*Firecheckout.*css" -exec rm -rf {} \;

    # run deployment command
    php bin/magento setup:static-content:deploy
    ```
