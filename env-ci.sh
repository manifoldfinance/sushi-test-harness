#!/bin/bash -x
CI_NAME=
if [ "$CI" = "true" ] && [ "$CIRCLECI" = "true" ];
elif [ "$GITHUB_ACTIONS" != "" ];
fi
git diff --quiet HEAD^ HEAD ./
