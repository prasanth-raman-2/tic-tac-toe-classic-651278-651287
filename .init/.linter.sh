#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tic-tac-toe-classic-651278-651287/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

