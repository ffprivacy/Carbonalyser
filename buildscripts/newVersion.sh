#!/bin/bash
set -e

manifest="manifest.json"
if ! [ -f "$manifest" ] ; then
	echo "run this script from top level";
	exit 1;
fi
current_version=$(jq -r '.version' "$manifest")
IFS='.' read -r major minor patch <<< "$current_version"
minor=$((minor + 1))
new_version="${major}.${minor}.0"

jq ".version = \"$new_version\"" "$manifest" > tmp.$$.json && mv tmp.$$.json "$manifest"

git add "$manifest"
git commit -m "Bump version to $new_version"
git tag "$new_version"
git push
git push --tags

