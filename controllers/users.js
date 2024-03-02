const index = (request, respond) => {
    respond.render('users/dashboard', { title: 'Dashboard'});
}
module.exports = {
    index,
}