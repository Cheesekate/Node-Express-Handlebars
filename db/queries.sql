USE burgers_db;

UPDATE burgers SET status = "eaten" WHERE id = 1;
SELECT id, bugers_name FROM burgers WHERE status = "eaten";
