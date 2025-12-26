const Listing  = require("../models/listing");

module.exports.index = (async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

module.exports.renderNewForm = ((req, res) => {
  res.render("listings/new.ejs");
});

module.exports.showListing = (async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate({path : "reviews",
    populate : "author",
  }
  
  ).populate("owner");

  if (!listing) {
    req.flash("error", "Listing You Requested Does Not Exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
});

module.exports.createListing = (async (req, res) => {
  const listingData = req.body.listing;
  let url = req.file.path ; 
  let filename = req.file.filename;

  // // remove empty image field
  // if (!listingData.image || listingData.image.trim() === "") {
  //   delete listingData.image;
  // }

  const newListing = new Listing(listingData); 
  newListing.owner = req.user._id;
  newListing.image = {url , filename}
  await newListing.save();
  req.flash("success" , "New Listings Created");
  res.redirect("/listings");
});

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing You Requested Does Not Exist!");
    return res.redirect("/listings");
  }

  // generate transformed image URL
  let originalImageUrl = listing.image.url.replace(
    "/upload",
    "/upload/,w_250,e_blur:300"
  );

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};


module.exports.updatelisting = (async (req, res) => {

  let { id } = req.params;
  // let listing = await Listing.findById(id);

  // if (listing.owner.toString() !== req.user._id.toString()) {
  //   req.flash("error", "You don't have permission to edit this listing");
  //   return res.redirect(`/listings/${id}`);
  // }
  if(typeof req.file !== "undefined"){
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  let url = req.file.path;
  let filename = req.file.filename;
  listing.image = {url , filename}
  await listing.save();
  }
  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${id}`);
});

module.exports.destroyListing = (async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success" , "Listings Delted!");
  res.redirect("/listings");
});