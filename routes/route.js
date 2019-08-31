exports.home=function(req, res) {
    res.render('home',{
        heading:'Welcome to home page',
        title:'Home'
    });
}
exports.city=function(req, res) {
    var name=req.params.city;
    var title, heading;
    var imagecount=[1,2,3];
    if(name=='Pune' || name=="pune") {
        heading="Welcome to Pune 11111";
        title="pune";
        
    } else if(name=='Mumbai' || name=='mumbai') {
        heading="Welcome to Mumbai 2222";
        title="mumbai";
        
    } else {
        heading="Welcome to Pune 11111";
        title="pune";
        
    }
    res.render('city',{
        heading:heading,
        title:title,
        imagecount:imagecount
    });
}
