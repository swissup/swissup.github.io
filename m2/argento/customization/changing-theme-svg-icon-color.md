---
layout: default
title: Changing the theme SVG icon color
description: Chhanging SVG icons colors when icon is coded to base64
keywords: icon, color, svg
category: Argento
---

# Changing the theme SVG icon color

There's currently no easy easy way to do that, but that's possible.

Let's take for example the **Argento Force** theme **Shield** icon on top. 

![Yellow shield icon](/images/m2/argento/customization/yellow-shield.png)

And change YELLOW color to RED

1. Save that icon locally.
2. Open it with any text editor.
3. find the following code responsible for yellow color
    `fill=#EDE734`
4. Change it to red one 
    `fill=#F00`
    and save.
5. Now you have the icon with needed color.
6. We need to convert **SVG** icon to code to prevent additional data load. Open some free **SVG to Base64** converter (i.e. [codebeautify](https://codebeautify.org/svg-to-base64-converter)) and upload your image there.
7. Find the **CSS Background Source** and copy it.
8. Open your theme and add your custom styles to theme Additional CSS Field in `Stores > Configuration > Swissup > Themes Editor > Argento Force > Additional CSS > CSS Styles` in the following way:

```
.force-icon.force-shield { '[YOUR COPIED CODE]' }
```
don't forget to wrap that code into quotes `' '`. 
It should look similar to:

```
.force-icon.force-shield { background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDlweCIgaGVpZ2h0PSI1N3B4IiB2aWV3Qm94PSIwIDAgNDkgNTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg0LCAtMzc5NSkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NC42NTM1ODgsIDM3OTYuNTM3MykiPjxwYXRoIGQ9Ik0zLjM1Njk4NzMzLDEyLjQwODQ4NjUgQzMuNDEzMjgxMDMsMTIuNDA4NzY2MSAzLjQ2OTU3NDczLDEyLjQwODk1MjUgMy41MjYwNTQ4MywxMi40MDg5NTI1IEMxMi45Mjk3MTIzLDEyLjQwODk1MjUgMjEuMDYxMDc2Miw4Ljc2NTUxOTg2IDI0Ljg4NTg3ODksMy40OTE5IEMyOC43MTA2ODE2LDguNzY1NTE5ODYgMzYuODQyMDQ1NSwxMi40MDg5NTI1IDQ2LjI0NTc5NjIsMTIuNDA4OTUyNSBDNDYuNjA5MDk1NiwxMi40MDg5NTI1IDQ3LjA3OTk0OTUsMTIuNDAwMTkxNSA0Ny4zMzAwMDkxLDEyLjM5MjczNTQgQzQ3LjM0MTE5MzMsMTYuMjgyODcyNCA0Ny4zNTcyMjM5LDI1LjkwMDk4NjQgNDcuMzU3MjIzOSwzMC40NTE3MzU1IEM0Ny4zNTcyMjM5LDM1LjI4MzQ4NzEgNDUuODIwOTgzOCwzOS45NjEzNjMxIDQzLjAxNjU1MSw0My42NjY0MDE5IEMzOC45Mzc4Njc0LDQ5LjA2NjU4OTMgMzMuMTE3NjIwOCw1My4wNjU5NTg0IDI1LjM0MjU2NjIsNTUuNDkxOSBDMTguNDA4MDAyNiw1My4wNTYwNzkxIDEyLjYzMDcyMTksNDguOTQxMDQ2OSA4LjAzMDU3Niw0My4xMTc4MTc5IEM1LjAxNzkzMTA3LDM5LjM1Nzk3NjYgMy4zNTQ0NzA4OSwzNC41MDgzMzAzIDMuMzU0NDcwODksMjkuNDg0Njc2OSBDMy4zMzkzNzIyNSwyNS41MDcyMTAxIDMuMzQ4NTk5MiwxNi4xOTk3MzY2IDMuMzU2OTg3MzMsMTIuNDA4NDg2NSBaIiBmaWxsPSIjRjAwIj48L3BhdGg+PHBhdGggZD0iTTAuMzU2OTg3MzMsOS40MDg0ODY0NiBDMC40MTMyODEwMjksOS40MDg3NjYwNiAwLjQ2OTU3NDcyOSw5LjQwODk1MjQ3IDAuNTI2MDU0ODMxLDkuNDA4OTUyNDcgQzkuOTI5NzEyMjcsOS40MDg5NTI0NyAxOC4wNjEwNzYyLDUuNzY1NTE5ODYgMjEuODg1ODc4OSwwLjQ5MTkgQzI1LjcxMDY4MTYsNS43NjU1MTk4NiAzMy44NDIwNDU1LDkuNDA4OTUyNDcgNDMuMjQ1Nzk2Miw5LjQwODk1MjQ3IEM0My42MDkwOTU2LDkuNDA4OTUyNDcgNDQuMDc5OTQ5NSw5LjQwMDE5MTUzIDQ0LjMzMDAwOTEsOS4zOTI3MzU0MSBDNDQuMzQxMTkzMywxMy4yODI4NzI0IDQ0LjM1NzIyMzksMjIuOTAwOTg2NCA0NC4zNTcyMjM5LDI3LjQ1MTczNTUgQzQ0LjM1NzIyMzksMzIuMjgzNDg3MSA0Mi44MjA5ODM4LDM2Ljk2MTM2MzEgNDAuMDE2NTUxLDQwLjY2NjQwMTkgQzM1LjkzNzg2NzQsNDYuMDY2NTg5MyAzMC4xMTc2MjA4LDUwLjA2NTk1ODQgMjIuMzQyNTY2Miw1Mi40OTE5IEMxNS40MDgwMDI2LDUwLjA1NjA3OTEgOS42MzA3MjE5LDQ1Ljk0MTA0NjkgNS4wMzA1NzYsNDAuMTE3ODE3OSBDMi4wMTc5MzEwNywzNi4zNTc5NzY2IDAuMzU0NDcwODksMzEuNTA4MzMwMyAwLjM1NDQ3MDg5LDI2LjQ4NDY3NjkgQzAuMzM5MzcyMjQ5LDIyLjUwNzIxMDEgMC4zNDg1OTkxOTYsMTMuMTk5NzM2NiAwLjM1Njk4NzMzLDkuNDA4NDg2NDYgWiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD48cG9seWdvbiBmaWxsPSIjMDAwIiBwb2ludHM9IjIxLjIwNDUxNTkgMzAuNDEzNzYxIDMzLjYwNDM5OTMgMTggMzYuNDQ1NTgyNiAyMC44MzU2ODMxIDIxLjMwMDQ3NDMgMzYgMTEgMjYuMDUwMTA0MSAxMy44MTc4Mjg0IDIzLjE4OTc5NjgiPjwvcG9seWdvbj48L2c+PC9nPjwvZz48L3N2Zz4K') }
```
9. Save, clear cache, refresh, enjoy!
    
![Red shield icon](/images/m2/argento/customization/red-shield.png)