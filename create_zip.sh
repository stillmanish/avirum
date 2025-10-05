#!/bin/bash

# Create a zip file of all website files for Supabase migration
cd "$(dirname "$0")"
zip -r avirumapps_supabase_migration.zip . -x "*.git*" "create_zip.sh" "*.zip"

echo "Created avirumapps_supabase_migration.zip - Ready to upload to Supabase!"
