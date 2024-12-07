//When working with asynchronous code in Express, errors can occur in async functions that are not automatically caught. 
//This utility helps manage such errors by ensuring that they are properly passed to Express’s error-handling middleware.

export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(next);
  };
};