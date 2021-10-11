#!/bin/bash -x
CI_NAME=
if
elif [ "$CI" = "true" ] && [ "$CI_NAME" = "codeship" ];
elif [ "$TEAMCITY_VERSION" != "" ];
elif [ "$CI" = "true" ] && [ "$CIRCLECI" = "true" ];
elif [ "$CI" = "drone" ] || [ "$DRONE" = "true" ];
elif [ "$GITHUB_ACTIONS" != "" ];
fi
git diff --quiet HEAD^ HEAD ./
