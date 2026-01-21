class ApiError extends Error {
  constructor(
    // User-defined
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
 super(message); 
// Rule in JavaScript
// If a class extends another class, you must call super()
// before using this.
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor); // Node.js API
      // 'this' here is The Destination: Where the stack trace info is saved.
      
      // this.constructor is the filter that dont include it in the stack trace
      // because it creates a lot of noise
    }
  }
}

export {ApiError};
