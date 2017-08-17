functions start
functions logs read
functions deploy agent --trigger-http
ngrok http 8010



gsutil mb -p chucknorrisjokes-174821 gs://chucknorrisjokes 
gcloud beta functions deploy agent --stage-bucket chucknorrisjokes --trigger-http 

