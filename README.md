## Using-JWT-in-Application

## JWT in UserAuth
  - Generated a JWT token with a secret key and expiration time.
  - In the middleWare Folder created authMiddleware for Token Validation and ErrorHandling.
  - If the token validation is successfull the request moves to the next operation.
  - Established Proper Errorhandling with suitable error messages.
  - Then used the middleware in `userAuth.js` to make user login Experience Smoother with tokens.
