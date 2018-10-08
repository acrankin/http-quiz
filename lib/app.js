const { parse } = require('url');



module.exports = (req, res) => {
    const url = parse(req.url, true);
    
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'api' && parts[1] === 'penguins') {
        res.end(['bernice', 'bernard']);
    }
  
  
};
