#!/bin/bash
if [[ -f "yarn.lock" ]]; then
	if [[ $+commands[yarn] ]]; then
		echo "Deleting yarn.lock..." && rm yarn.lock && echo "Installing packages via yarn" && yarn
	else
		"This directory has a yarn.lock but yarn is not available on this system. Aborting..."
	fi
else
	exit 1
fi
