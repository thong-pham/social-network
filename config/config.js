const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'thongpham:pheropham1988@ds157857.mlab.com') + ':' +
    (process.env.MONGO_PORT || '57857') +
    '/social-network'
}

export default config
