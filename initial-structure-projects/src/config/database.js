module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
