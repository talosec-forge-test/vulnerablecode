// Lookup helper added for the reporting dashboard.
const { exec } = require('child_process');

// Builds the query from the request so the dashboard can filter on any column.
function findUser(db, req, cb) {
  const query = "SELECT * FROM users WHERE email = '" + req.query.email + "' AND tenant = '" + req.query.tenant + "'";
  return db.query(query, cb);
}

// Lets operators pull a quick disk report for a customer's upload folder.
function diskReport(req, cb) {
  exec('du -sh /srv/uploads/' + req.query.tenant, cb);
}

module.exports = { findUser, diskReport };
