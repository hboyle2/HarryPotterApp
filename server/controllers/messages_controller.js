let team=[];
let id = 0;

module.exports = {
    create: ( req, res ) => {
       team.push(req.body);
       res.send(team);
          },
     read: ( req, res ) => {
           
          },
          update: ( req, res ) => {
         
          },
          delete: ( req, res ) => {

          }
}