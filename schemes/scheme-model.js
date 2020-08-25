const db = require("../data/config")

function find() {
  return db("schemes")
}

function findById(id) {
  return ("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps as s")
  .join("schemes as sc", "sc.id", "s.scheme_id" )
  .select("sc.scheme_name", "s.step_number", "s.instructions" )
  .where("s.scheme_id", id);
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del();
}

function addStep(step, scheme_id) {
  return db("steps as st")
  .join("schemes as sc", "sc.id", "st.scheme_id")
  .where();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
}