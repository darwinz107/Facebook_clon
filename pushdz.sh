#!/bin/bash

echo "Write a message to commit:"
read message
git add .
git commit -m "$message"
git push origin main