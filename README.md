## Step 1. 
### (root dir) **npm install**

## Step 2.
### Make credentials File
    sudo tee $HOME/.aws/credentials > /dev/null << EOF
    [default]
    aws_access_key_id = YOUR_AWS_ACCESS_KEY_ID
    aws_secret_access_key = YOUR_AWS_SECRET_ACCESS_KEY
    EOF

## Step 3.
    node index.js

## Step 4.
### Find and select the region where your S3 is located.
### (Currently, there are only ap-northease-2, us-east-1 and us-east-2).

## Step 5.
### Selecting an S3 bucket for that region will start the download.
### Try going to 
    cd $HOME/.aws/downloads.
    
    
