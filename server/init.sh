#!/bin/sh

echo '--- run yarn index_db'
yarn index_db

echo '--- run yarn init_data'
yarn init_data

yarn start