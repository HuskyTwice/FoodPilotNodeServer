import model from "./model.js";

// follower is the person who wants to follow another user.
// followed is the person who is followed by another user.
export const userFollowsUser = (follower, followed) =>
    model.create({ follower, followed });

export const userUnfollowsUser = (follower, followed) =>
    model.deleteOne({ follower, followed });

export const findFollowersOfUser = (followed) =>
    model.find({ followed }).populate("follower");

export const findFollowedUsersByUser = (follower) =>
    model.find({ follower }).populate("followed");