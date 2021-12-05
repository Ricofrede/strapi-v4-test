module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b26009dea44c7466a08396ef7dd19d71'),
  },
});
