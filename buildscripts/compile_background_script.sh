#!/bin/bash

if ! [ -f "background-build/files.txt" ] ; then
	echo "Run this script from top level";
	exit 1;
fi

FILES=($(cat background-build/files.txt))
out=background-build/service_worker.js
> "$out"
for file in "${FILES[@]}" ; do
	echo "// ${file}" >> "$out"
	cat "$file" >> "$out"
	echo "" >> "$out"
done
