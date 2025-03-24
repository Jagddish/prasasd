#!/bin/bash

# JSON file containing profile data
JSON_FILE="profiles.json"

# Read the JSON line by line and extract id & avatarUrl manually
while IFS= read -r line; do
    id=$(echo "$line" | sed -n 's/.*"id": \([0-9]*\).*/\1/p')
    avatarUrl=$(echo "$line" | sed -n 's/.*"avatarUrl": "\([^"]*\)".*/\1/p')

    if [[ -n "$id" && -n "$avatarUrl" ]]; then
        echo "Downloading $avatarUrl as ${id}.jpg..."
        wget -O "${id}.jpg" "$avatarUrl"
    else
        echo "Skipping profile with missing id or avatarUrl."
    fi
done < "$JSON_FILE"

echo "✅ Download completed!"

