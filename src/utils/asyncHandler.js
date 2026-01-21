// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).
//         catch((err) => next(err))
//     }
// }

// The function asyncHandler takes a function (requestHandler) as a parameter
// and returns a new function where requestHandler is wrapped with error handling

function asyncHandler(requestHandler) {
  return function (req, res, next) {
    Promise.resolve(
      requestHandler(req, res, next)
    ).catch(function (error) {
      next(error); //next(error) passes control to Express’s error-handling middleware, skipping all remaining non-error middleware.
    });
  };
}


export { asyncHandler };





 
// const asyncHandler = () => {}

// const asyncHandler = (fn) means that asyncHandler(fn)

// simpler version and easier to understand.
// function asyncHandler(fn) {
//   return async function () {
//     // code goes here
//   };
// }

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//         success: false,
//         message: error.message
//     });
//   }
// };

// 404 → Not Found

// 401 → Unauthorized

// 500 → Server problem