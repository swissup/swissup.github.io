---
layout: default
title:  "Can't unzip: Operation not permitted (Mac)"
permalink: "/posts/how-to-unpack-archive-on-mac/"
description: "How to unpack archive in Mac, when 'Error 1 - Operation not permitted' message is raised"
keywords: "archive, operation not permitted, unarchiver, error 1 - operation not permitted, zip, unzip"
categories: "posts"
---

# Can't unzip: Operation not permitted (Mac)

> Our MacOS customers facing the issue, when they can't unpack extension archive,
> using standard [Unarchiver](http://unarchiver.c3.cx/unarchiver) utility.
>
> In this tutorial we'll show you how you can easely unpack extension archive,
> when **'Error 1 - Operation not permitted'** message is raised.

Here is how the error looks like, when you are trying to unpack firecheckout
archive:

![Screenshot: Error 1 - Operation not permitted](/images/posts/2016-08-30-how-to-unpack-archive-in-mac/error-message.png)

##### Solution:

In short - use the terminal to unzip and `chmod` unzipped files.

Follow the steps below to accomplish this solution:

 1. Run terminal

    Press `Option + Space` and type in `terminal` in Spotlight Search popup:

    ![Running terminal](/images/posts/2016-08-30-how-to-unpack-archive-in-mac/spotlight-search.png)

 2. Run the following commands in terminal

    > In this example we assume that you've downloaded firecheckout
    > archive into `~/Downloads` folder.
    >
    > Please replace archive name with actual name that you'd like to unpack.

    ```bash
    cd ~/Downloads
    unzip -q firecheckout-3.6.2.zip -d firecheckout-3.6.2 && cd firecheckout-3.6.2
    find . -type d -exec chmod 2770 {} \;
    find . -type f -exec chmod 660 {} \;
    ```

    ![Runnning commands in terminal](/images/posts/2016-08-30-how-to-unpack-archive-in-mac/running-commands-in-terminal.png)

 3. That's all. You can browse the sources with `Finder`

    ![Unpacked sources](/images/posts/2016-08-30-how-to-unpack-archive-in-mac/unpacked-sources.png)
