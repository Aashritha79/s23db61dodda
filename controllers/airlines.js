var Airlines = require('../models/airlines');
// List of all Airlines
exports.airlines_list = async function(req, res) {
    try{
    theCostumes = await Airlines.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.airlines_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Airlines.find();
    res.render('airlines', { title: 'Airlines Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Airlines.
// for a specific Costume.
exports.airlines_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Airlines.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    




exports.airlines_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Airlines.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle Airlines create on POST.
exports.airlines_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Airlines create POST');
};

// Handle Costume create on POST.
exports.airlines_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Airlines();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.airlines_name = req.body.airlines_name;
    document.airlines_seating = req.body.airlines_seating;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Airlines delete form on DELETE.
exports.airlines_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Airlines delete DELETE ' + req.params.id);
};
// Handle Airlines update form on PUT.
exports.airlines_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Airlines update PUT' + req.params.id);
};

// Handle Costume update form on PUT.
exports.airlines_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Airlines.findById( req.params.id)
// Do updates of properties
if(req.body.airlines_name)
    toUpdate.airlines_name = req.body.airlines_name;
if(req.body.airlines_seating) toUpdate.airlines_seating = req.body.airlines_seating;
if(req.body.price) toUpdate.price= req.body.price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle airlines delete on DELETE.
exports.airlines_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Airlines.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle a show one view with id specified by query
exports.Airlines_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Airlines.findById( req.query.id)
    res.render('Airlinesdetail',
   { title: 'Airline Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
   // No body, no in path parameter, no query.
   // Does not need to be async
   exports.Airlines_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Airlinescreate', { title: 'Airlines Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.Airlines_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Airlines.findById(req.query.id)
    res.render('Airlinesupdate', { title: 'Airlines Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
exports.Airlines_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Airlines.findById(req.query.id)
    res.render('Airlinesdelete', { title: 'Airlines Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
    
    