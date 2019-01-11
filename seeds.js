var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {
        name: "Cloud's Rest 3", 
        image: "https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f6c978a6efbdba_340.jpg",
        description: "blahblahblah"
    },
    
     {
        name: "Cloud's Rest 2", 
        image: 'https://www.photosforclass.com/download/flickr-2984976440',
        description: "blahblahblah"
    },
    
     {
        name: "Cloud's Rest 1", 
        image: "https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f6c978a6efbdba_340.jpg",
        description: "blahblahblah"
    }
    
]


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds!");
    //add a few campgrounds
data.forEach(function(seed){
    Campground.create(seed, function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("added a campground");
            //create a comment
            Comment.create(
                {
                    
                    text: "This place is great",
                    author: "Homer"
                    }, function (err, comment){
                        if(err){
                            console.log(err);
                        } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                        
                            
                        }
                    });
                   
            
        }
        });
    });
    
    });

}

//add a few comments

module.exports = seedDB;