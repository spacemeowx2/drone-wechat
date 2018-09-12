<img src="wechat.svg" />

## drone-wechat
[![Travis](https://img.shields.io/travis/lizheming/drone-wechat.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/lizheming/drone-wechat/badge.svg?branch=master)](https://coveralls.io/github/lizheming/drone-wechat?branch=master)
[![Docker Pulls](https://img.shields.io/docker/pulls/lizheming/drone-wechat.svg)]()
[![](https://images.microbadger.com/badges/image/lizheming/drone-wechat.svg)](https://microbadger.com/images/lizheming/drone-wechat)
[![GitHub release](https://img.shields.io/github/release/lizheming/drone-wechat.svg)]()

Drone plugin for sending wechat notifications. 

## Description

This drone wechat notification plugin builds base on Wechat for Work.

Read this in other languages: [English](README.md), [简体中文](README.zh-cn.md).

## Environment

- `PLUGIN_KEY`: The send key
- `WECHAT_KEY`: alias for `PLUGIN_CORPID`
- `PLUGIN_MSG_TYPE`: msgtype.
- `PLUGIN_MESSAGE`: Notification body message, support markdown.

## Usage

```
docker run --rm \
  -e PLUGIN_CORPID=corpid \
  -e PLUGIN_CORP_SECRET=corpsecret \
  -e PLUGIN_AGENT_ID=agentid \
  -e PLUGIN_TO_USER=userId \
  -e PLUGIN_TO_TAG=tagId \
  -e PLUGIN_TO_PARTY=toParty \
  -e PLUGIN_SAFE=1 \
  -e PLUGIN_MSG_URL=url \
  -e PLUGIN_BTN_TXT=true \
  -e PLUGIN_TITLE=title \
  -e PLUGIN_MESSAGE=description \
  -e DRONE_REPO_OWNER=lizheming \
  -e DRONE_REPO_NAME=drone-wechat \
  -e DRONE_COMMIT_SHA=e5e82b5eb3737205c25955dcc3dcacc839b7be52 \
  -e DRONE_COMMIT_BRANCH=master \
  -e DRONE_COMMIT_LINK=https://github.com/lizheming/drone-wechat/compare/master... \
  -e DRONE_COMMIT_AUTHOR=lizheming \
  -e DRONE_COMMIT_AUTHOR_EMAIL=secretlzm007@gmail.com \
  -e DRONE_BUILD_NUMBER=1 \
  -e DRONE_BUILD_STATUS=success \
  -e DRONE_BUILD_LINK=http://github.com/lizheming/drone-wechat \
  -e DRONE_TAG=1.0.0 \
  -e DRONE_JOB_STARTED=1477550550 \
  -e DRONE_JOB_FINISHED=1477550750 \
  lizheming/drone-wechat
```
