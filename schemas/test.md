---
title: Some title
name: Name of the file
date: "2022-01-10"
authors:
  - some
draft: false
_inputs:
  title:
    comment: name of the file
  authors:
    type: multiselect
    options:
      values: _select_data.inventory
_select_data:
  inventory:
    - key: P1
      display_name: Potion
      kind: consumable
---

## Why the Project is Important

Project description.