## Used PUT-API

## Update Profile Route Summary

This route allows authenticated users to update their profile information:

1. **Route: PUT /update**
   - Requires a valid `JWT` token (verifyToken middleware).
   - Accepts name, bio, and profilePic in the request body.
   - Updates the current user's profile using `findByIdAndUpdate` method with validation.

2. **Responses**
   - `200 OK` – Returns a success message with the updated user's name.
   - `500 Internal Server Error` – Returns an error message if the update fails.
