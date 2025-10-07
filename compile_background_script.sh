#!/bin/bash

FILES=($(cat background-build/files.txt))
out=background-build/service_worker.js
> "$out"
for file in "${FILES[@]}" ; do
	echo "// ${file}" >> "$out"
	cat "$file" >> "$out"
	echo "" >> "$out"
done
