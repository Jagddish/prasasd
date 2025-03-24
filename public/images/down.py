import json
import subprocess

# Load JSON data
with open('users.json', 'r') as file:
    users = json.load(file)

# Iterate over users and download images
for user in users:
    user_id = user['id']
    avatar_url = user['avatarUrl']
    output_filename = f"{user_id}.jpg"
    
    # Construct the curl command
    curl_command = ['curl', '-o', output_filename, avatar_url]
    
    # Execute the curl command
    subprocess.run(curl_command)
    print(f"Downloaded image for user ID {user_id} as {output_filename}")

