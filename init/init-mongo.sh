#!/bin/bash

PASSWORD=$(<$MONGO_INITDB_PWD_FILE)

echo "Generating MongoDB account for connection..."

set -e
mongosh <<EOF
use $MONGO_INITDB_DATABASE

db.createUser({
  user: '$MONGO_INITDB_USER',
  pwd: '$PASSWORD',
  roles: [
    { role: 'readWrite', db: '$MONGO_INITDB_DATABASE' }
  ]
});
EOF

echo "MongoDB account generated, import data for demo purposes..."

mongoimport --port=27017 --db=natours --collection=users --file=/docker-entrypoint-initdb.d/users.json --jsonArray --username=$MONGO_INITDB_USER --password=$PASSWORD
mongoimport --port=27017 --db=natours --collection=tours --file=/docker-entrypoint-initdb.d/tours.json --jsonArray --username=$MONGO_INITDB_USER --password=$PASSWORD
mongoimport --port=27017 --db=natours --collection=reviews --file=/docker-entrypoint-initdb.d/reviews.json --jsonArray --username=$MONGO_INITDB_USER --password=$PASSWORD

echo "Demo data imported successfully..."
