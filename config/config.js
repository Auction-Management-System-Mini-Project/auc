const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "1234",
  mongoUri: process.env.MONGODB_URI ||
  process.env.MONGO_HOST ||
  'mongodb+srv://amantaphelix:amantaphelix@cluster0.igbjbfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  stripe_connect_test_client_id: 'ca_PlZaEkBpnz2r83IXLK5aguXQ3iPXQbXb',
  stripe_test_secret_key: 'pk_test_51OvFgFSBW9X6oczMbiqPewT6ccALT9A909Zm8A3VQkl9eApOHgu1vc0q9hVgJtfIShmtT2RYfd7N1OEDFLbCw1SG00mTgWc34W',
  stripe_test_api_key: 'sk_test_51OvFgFSBW9X6oczMePo2V6gsqBkFwrxOxkr1vA4rQNpAjlimTmWo3og5FVqVr6m2cabiXiA3Z5lJ33Dpj8pXSUoC00n0O8Pak8' 
}

export default config
