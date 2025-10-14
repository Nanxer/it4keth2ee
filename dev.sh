#!/bin/bash

NODE_PATH="/home/user/.nvm/versions/node/v22.19.0/bin/node"
NPM_PATH="/home/user/.nvm/versions/node/v22.19.0/bin/npm"

export PATH="/home/user/.nvm/versions/node/v22.19.0/bin:$PATH"

COMMAND="$NPM_PATH run docs:dev"

NODE="$NODE_PATH" $COMMAND