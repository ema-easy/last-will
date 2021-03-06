var RenderController = require('./controllers/RenderController');
var ContractsController = require('./controllers/ContractsController');

module.exports = function (app) {

    // Well known acme challenge
    app.get('/.well-known/acme-challenge/:hash', function (req,res){
        res.status(200).send(FileSystem.readFileSync('../.well-known/acme-challenge/'+req.params.hash));
    });

    // Home
    app.get('/', RenderController.renderHome);

    // Error meta mask
    app.get('/requirements', RenderController.renderRequirements);

    // Render hierarchy contracts list
    app.get('/my-wills', ContractsController.getContractsInfo, ContractsController.checkMetaMask, RenderController.renderMyWills);

    // Render witness link
    app.get('/witness', ContractsController.getContractsInfo, RenderController.renderWitness);

    // Render heir link
    app.get('/heir', ContractsController.getContractsInfo, RenderController.renderHeir);

    // Error fallback //
    // app.get('*', RenderController.renderError);

};